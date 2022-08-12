import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AboutPageDto } from 'src/pages/controllers/about/dto/about-page.dto';
import { AboutPage } from 'src/pages/models';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class AboutPageService {
	constructor(
		@InjectRepository(AboutPage)
		private readonly aboutRepository: Repository<AboutPage>,
	) {}

	async getAboutPage(): Promise<AboutPage[]> {
		return this.aboutRepository.find();
	}

	async createPage(dto: AboutPageDto): Promise<AboutPage> {
		const newPageAbout = this.aboutRepository.create(dto);
		return this.aboutRepository.save(newPageAbout);
	}

	async updatePage(dto: AboutPageDto, id: number): Promise<UpdateResult> {
		return this.aboutRepository.update(id, dto);
	}
}
