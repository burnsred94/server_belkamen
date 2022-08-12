import { IsString } from 'class-validator';

export class FeedbackDto {
	@IsString()
	name: string;
	@IsString()
	telefone: string;
}
