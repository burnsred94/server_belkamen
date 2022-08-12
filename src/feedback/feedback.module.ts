import { Module } from '@nestjs/common';
import { TelegramModule } from 'src/telegram/telegram.module';
import { FeedbackController } from './feedback.controller';

@Module({
	imports: [TelegramModule],
	controllers: [FeedbackController],
})
export class FeedbackModule {}
