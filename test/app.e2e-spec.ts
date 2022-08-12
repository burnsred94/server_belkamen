import { Test, TestingModule } from '@nestjs/testing';
import { Body, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { AuthDto } from '../src/auth/dto/auth.dto';
import { disconnect } from 'mongoose';
import { UserModel } from '../src/auth/user.entity';
import { ALREADY_REGISTER_ERROR } from '../src/auth/auth.constants';

const UserDto: AuthDto = {
	login: 'test@test.com',
	password: 'test',
};

describe('AppController (e2e)', () => {
	let app: INestApplication;
	let token: string;

	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule],
		}).compile();

		app = moduleFixture.createNestApplication();
		await app.init();

		const { body } = await request(app.getHttpServer())
			.post('/auth/login')
			.send(UserDto);
		token = body.access_token;
	});

	afterAll(() => {
		disconnect();
	});
});
