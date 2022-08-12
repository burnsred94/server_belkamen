import { IsNumber, IsString } from 'class-validator';
import { Category } from 'src/pages/models';

export class ProductCategoryDto {
	@IsString()
	nameCategory: string;
	@IsString()
	title: string;
	@IsNumber()
	catalog: Category;
}
