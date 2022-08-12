import {
	BadRequestException,
	Body,
	Controller,
	Get,
	NotFoundException,
	Param,
	Patch,
	Post,
	UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { NOT_FOUND_PAGE_ERROR } from 'src/pages/pages.constants';
import { AboutPageService } from 'src/pages/services';
import { AboutPageDto } from './dto/about-page.dto';

@Controller('about')
export class AboutController {
	constructor(private readonly aboutService: AboutPageService) {}

	@Get('page')
	async getAbout() {
		const page = await this.aboutService.getAboutPage();
		if (!page) {
			throw new NotFoundException(NOT_FOUND_PAGE_ERROR);
		}
		return page;
	}
	@UseGuards(JwtAuthGuard)
	@Post('create')
	async createAboutPage(@Body() dto: AboutPageDto) {
		try {
			const newPageAbout = this.aboutService.createPage(dto);
			return newPageAbout;
		} catch (e) {
			throw new BadRequestException();
		}
	}

	@UseGuards()
	@Patch(':id')
	async update(@Body() dto: AboutPageDto, @Param() id: number) {
		try {
			const update = await this.aboutService.updatePage(dto, id);
			return update;
		} catch (e) {
			throw new BadRequestException();
		}
	}
}
