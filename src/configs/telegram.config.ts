import { ConfigService } from '@nestjs/config';
import { ITelegramOptions } from 'src/telegram/telegram.interface';

export const getTelegramConfig = async (
	configService: ConfigService,
): Promise<ITelegramOptions> => {
	const token = configService.get('TELEGRAM_TOKEN');
	if (!token) {
		throw new Error('Телеграм токен не задан');
	}
	return {
		token,
		chatId: configService.get('TELEGRAM_CHAT_ID'),
	};
};
