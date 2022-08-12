import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const getTypeOrmConfig = async (
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
});
