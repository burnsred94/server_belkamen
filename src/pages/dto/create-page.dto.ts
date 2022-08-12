import { IsArray, IsString } from 'class-validator';

export class CreateMenuDto {
	@IsArray()
	firstCategory: string[];
	@IsString()
	logo: string;
	@IsString()
	title: string;
}
