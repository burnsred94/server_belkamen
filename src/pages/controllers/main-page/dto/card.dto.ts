import { IsArray, IsNumber, IsString } from 'class-validator';

export class CardDto {
	@IsString()
	title: string;
	@IsNumber()
	price: number;
	@IsArray()
	description: string[];
	@IsArray()
	freeDescription: string[];
}
