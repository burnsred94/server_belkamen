import { IsArray, IsString } from 'class-validator';

export class GalleryBlockDto {
	@IsString()
	title: string;
	@IsArray()
	image: string[];
}
