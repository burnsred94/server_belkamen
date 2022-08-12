import { IsArray, IsString } from 'class-validator';

export class UpdateMenuDto {
	@IsArray()
	firstCategory: string[];
	@IsString()
	logo?: string;
	@IsString()
	title?: string;
}
