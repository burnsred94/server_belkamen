import { IsArray, IsString } from 'class-validator';

export class ContactsPageDto {
	@IsString()
	title: string;
	@IsString()
	email: string;
	@IsArray()
	phone: string[];
	@IsString()
	address: string;
	@IsString()
	city: string;
	@IsArray()
	timeWork: string[];
}
