import { TelegramModule } from './telegram/telegram.module';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TopPageModule } from './pages/pages.module';
import { ProductModule } from './product/product.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilesModule } from './files/files.module';
import { getTelegramConfig } from './configs/telegram.config';
import { getTypeOrmConfig } from './configs/typeorm.config';
import { FeedbackModule } from './feedback/feedback.module';

@Module({
	imports: [
		TelegramModule,
		ConfigModule.forRoot(),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getTypeOrmConfig,
		}),
		AuthModule,
		TopPageModule,
		ProductModule,
		FilesModule,
		TelegramModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getTelegramConfig,
		}),
		FeedbackModule,
	],
	providers: [ConfigService],
})
export class AppModule {}
