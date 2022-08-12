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
import { IdValidationPipe } from 'src/pipes/ad-validation.pipe';
import { UpdateResult } from 'typeorm';
import { CreateMenuDto } from './dto/create-page.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { NOT_FOUND_PAGE_ERROR } from './pages.constants';
import { Pages } from './pages.entity';
import { MenuService } from './pages.service';

@Controller('menu')
export class MenuController {
	constructor(private readonly menuService: MenuService) {}

	@Get()
	async getMenu(): Promise<Pages[]> {
		const menu = await this.menuService.getMenu();
		if (!menu) {
			throw new NotFoundException(NOT_FOUND_PAGE_ERROR);
		}
		return menu;
	}

	@UseGuards(JwtAuthGuard)
	@Post('create')
	async createMenu(@Body() dto: CreateMenuDto): Promise<Pages> {
		try {
			return await this.menuService.createMenu(dto);
		} catch (e) {
			throw new BadRequestException();
		}
	}

	@UseGuards(JwtAuthGuard)
	@Patch('update/:id')
	async updateMenu(
		@Body() dto: UpdateMenuDto,
		@Param('id', IdValidationPipe) id: number,
	): Promise<UpdateResult> {
		try {
			return await this.menuService.updateMenu(dto, id);
		} catch (e) {
			throw new BadRequestException();
		}
	}
}
