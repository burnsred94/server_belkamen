import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateMenuDto } from './dto/create-page.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Pages } from './pages.entity';

@Injectable()
export class MenuService {
	constructor(
		@InjectRepository(Pages)
		private readonly menuRepository: Repository<Pages>,
	) {}

	async getMenu(): Promise<Pages[]> {
		return this.menuRepository.find({
			relations: { catalog: true, main: true, about: true, contacts: true },
		});
	}

	async createMenu(dto: CreateMenuDto): Promise<Pages> {
		const newMenu = await this.menuRepository.create(dto);
		return this.menuRepository.save(newMenu);
	}

	async updateMenu(dto: UpdateMenuDto, id: number): Promise<UpdateResult> {
		return this.menuRepository.update(id, dto);
	}
}
