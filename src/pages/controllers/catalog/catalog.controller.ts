import {
	BadRequestException,
	Body,
	Controller,
	Get,
	NotFoundException,
	Param,
	Patch,
	Post,
	UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { CatalogPage, Category, ProductCategory } from 'src/pages/models';
import { CatalogPageService } from 'src/pages/services';
import { CatalogPageDto } from './dto/catalog.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { ProductCategoryDto } from './dto/create-product-category.dto';

@Controller('catalog')
export class CatalogController {
	constructor(private readonly catalogService: CatalogPageService) {}

	@Get()
	async getCatalog(): Promise<CatalogPage[]> {
		const page = await this.catalogService.getPage();
		if (!page) {
			throw new NotFoundException();
		}
		return page;
	}

	@Get('categories')
	async getCategory(): Promise<Category[]> {
		const page = await this.catalogService.getCategories();
		if (!page) {
			throw new NotFoundException();
		}
		return page;
	}

	@UseGuards(JwtAuthGuard)
	@Post('categories/create')
	async createCategory(@Body() dto: CreateCategoryDto): Promise<Category> {
		try {
			const page = await this.catalogService.createCategories(dto);
			return page;
		} catch (e) {
			throw new BadRequestException();
		}
	}

	@Get('categories/productCategory')
	async getProductCategory(): Promise<ProductCategory[]> {
		const page = await this.catalogService.getProductCategory();
		if (!page) {
			throw new NotFoundException();
		}
		return page;
	}

	@UseGuards(JwtAuthGuard)
	@Post('categories/productCategory/create')
	async createProductCategory(
		@Body() dto: ProductCategoryDto,
	): Promise<ProductCategory> {
		const page = await this.catalogService.createProductCategory(dto);
		if (!page) {
			throw new NotFoundException();
		}
		return page;
	}

	@Get('categories/productCategory/:category')
	async getTypeCategory(
		@Param('category') category: string,
	): Promise<ProductCategory> {
		const page = await this.catalogService.getTypeCategory(category);
		if (!page) {
			throw new NotFoundException();
		}
		return page;
	}

	@UseGuards(JwtAuthGuard)
	@Post('create')
	async createCatalog(@Body() dto: CatalogPageDto): Promise<CatalogPage> {
		try {
			const page = await this.catalogService.createPage(dto);
			return page;
		} catch (e) {
			throw new BadRequestException();
		}
	}

	@UseGuards(JwtAuthGuard)
	@Patch('/:id')
	async updatePage(@Body() dto: CatalogPageDto, @Param() id: number) {
		try {
			const page = await this.catalogService.updatePage(dto, id);
			return page;
		} catch (e) {
			throw new BadRequestException();
		}
	}
}
