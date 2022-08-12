import { IsString } from 'class-validator';

export class ConsultationBlockDto {
	@IsString()
	title: string;
	@IsString()
	subTitle: string;
	@IsString()
	description: string;
}
