import { IsArray, IsString } from 'class-validator';

export class AboutPageDto {
	@IsString()
	title: string;
	@IsString()
	description: string;
	@IsString()
	logo: string;
	@IsArray()
	services: string[];
	@IsString()
	subTitle: string;
	@IsString()
	subDescription: string;
}
