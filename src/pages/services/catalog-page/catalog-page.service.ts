import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CatalogPageDto } from 'src/pages/controllers/catalog/dto/catalog.dto';
import { CreateCategoryDto } from 'src/pages/controllers/catalog/dto/create-category.dto';
import { ProductCategoryDto } from 'src/pages/controllers/catalog/dto/create-product-category.dto';
import { CatalogPage, Category, ProductCategory } from 'src/pages/models';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class CatalogPageService {
	constructor(
		@InjectRepository(CatalogPage)
		private readonly catalogPageRepository: Repository<CatalogPage>,
		@InjectRepository(ProductCategory)
		private readonly productCategoryRepository: Repository<ProductCategory>,
		@InjectRepository(Category)
		private readonly categoryRepository: Repository<Category>,
	) {}

	async getPage(): Promise<CatalogPage[]> {
		return this.catalogPageRepository.find({
			relations: { category: true },
		});
	}

	async getCategories(): Promise<Category[]> {
		return this.categoryRepository.find({
			relations: { productCategory: true },
		});
	}

	async createCategories(dto: CreateCategoryDto): Promise<Category> {
		const category = this.categoryRepository.create(dto);
		return this.categoryRepository.save(category);
	}

	async getProductCategory(): Promise<ProductCategory[]> {
		return this.productCategoryRepository.find({
			relations: { products: true },
		});
	}

	async createProductCategory(
		dto: ProductCategoryDto,
	): Promise<ProductCategory> {
		const productCategory = this.productCategoryRepository.create(dto);
		return this.productCategoryRepository.save(productCategory);
	}

	async getTypeCategory(category: string): Promise<ProductCategory> {
		return this.productCategoryRepository.findOne({
			where: { nameCategory: category },
			relations: { products: true },
		});
	}

	async createPage(dto: CatalogPageDto): Promise<CatalogPage> {
		const newPage = this.catalogPageRepository.create(dto);
		return this.catalogPageRepository.save(newPage);
	}

	async updatePage(dto: CatalogPageDto, id: number): Promise<UpdateResult> {
		return this.catalogPageRepository.update(id, dto);
	}
}
