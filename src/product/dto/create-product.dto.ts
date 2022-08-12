import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ProductCategory } from 'src/pages/models';

export class CreateProductDto {
	@IsString()
	image: string;
	@IsString()
	title: string;
	@IsString()
	description: string;
	@IsNumber()
	price: number;
	@IsOptional()
	@IsNumber()
	oldPrice?: number;
	@IsString()
	category: string;
	@IsNumber()
	catalog: ProductCategory;
}
