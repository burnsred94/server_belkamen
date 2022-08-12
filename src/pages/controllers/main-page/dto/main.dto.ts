import { IsArray, IsString } from 'class-validator';

export class MainPageDto {
	@IsString()
	title: string;
	@IsString()
	description: string;
	@IsArray()
	specificsWork: string[];
	@IsArray()
	titleIndividualPlanWork: string[];
}
