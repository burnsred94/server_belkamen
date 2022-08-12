import { IsString } from 'class-validator';

export class CatalogPageDto {
	@IsString()
	title: string;
}
