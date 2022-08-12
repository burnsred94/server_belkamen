import { IsArray, IsString } from 'class-validator';

export class AdvantagesBlockDto {
	@IsString()
	title: string;
	@IsString()
	subTitle: string;
	@IsArray()
	description: string[];
}
