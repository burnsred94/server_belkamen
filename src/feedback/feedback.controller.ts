import {
	Body,
	Controller,
	Post,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { TelegramService } from 'src/telegram/telegram.service';
import { FeedbackDto } from './dto/feedback.data.dto';

@Controller('feedback')
export class FeedbackController {
	constructor(private readonly telegramService: TelegramService) {}

	@UsePipes(new ValidationPipe())
	@Post('data')
	async postFeedback(@Body() dto: FeedbackDto) {
		const message =
			`Обратный звонок\n` + `Имя: ${dto.name}\n` + `Телефон: ${dto.telefone}`;
		return await this.telegramService.sendMessage(message);
	}
}
