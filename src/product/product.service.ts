import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductEntity } from './models/product.entity';

@Injectable()
export class ProductService {
	constructor(
		@InjectRepository(ProductEntity)
		private readonly productModel: Repository<ProductEntity>,
	) {}

	async create(dto: CreateProductDto) {
		const newProduct = this.productModel.create(dto);
		return this.productModel.save(newProduct);
	}

	async getAll(): Promise<ProductEntity[]> {
		return this.productModel.find();
	}

	async findById(id: number): Promise<ProductEntity> {
		return this.productModel.findOne({ where: { id: id } });
	}

	async deleteById(id: number): Promise<DeleteResult> {
		return this.productModel.delete(id);
	}

	async updateById(id: number, dto: CreateProductDto): Promise<UpdateResult> {
		return this.productModel.update(id, dto);
	}

	async findByCategory(category: string): Promise<ProductEntity[]> {
		return this.productModel.find({ where: { category: category } });
	}
}
