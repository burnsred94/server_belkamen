import { TelegramModule } from './telegram/telegram.module';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TopPageModule } from './pages/pages.module';
import { ProductModule } from './product/product.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { FilesModule } from './files/files.module';
import { getTelegramConfig } from './configs/telegram.config';

@Module({
	imports: [
		TelegramModule,
		ConfigModule.forRoot(),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: async (
				configService: ConfigService,
			): Promise<TypeOrmModuleOptions> => ({
				type: 'mysql',
				host: configService.get('DB_HOST'),
				port: Number(configService.get('DB_PORT')) || 3306,
				username: configService.get('DB_USERNAME'),
				password: configService.get('DB_PASSWORD'),
				database: configService.get('DB_NAME'),
				entities: [],
				synchronize: true,
				autoLoadEntities: true,
			}),
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
	],
	providers: [ConfigService],
})
export class AppModule {}
