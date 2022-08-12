import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdvantagesBlockDto } from 'src/pages/controllers/main-page/dto/adventages.dto';
import { CardDto } from 'src/pages/controllers/main-page/dto/card.dto';
import { ConsultationBlockDto } from 'src/pages/controllers/main-page/dto/consultation.dto';
import { GalleryBlockDto } from 'src/pages/controllers/main-page/dto/gallery.dto';
import { MainPageDto } from 'src/pages/controllers/main-page/dto/main.dto';
import {
	BlockMainPageAdvantages,
	BlockMainPageConsultation,
	BlockMainPageGallery,
	Card,
	MainPage,
} from 'src/pages/models';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class MainPageService {
	constructor(
		@InjectRepository(MainPage)
		private readonly mainPageRepository: Repository<MainPage>,
		@InjectRepository(BlockMainPageAdvantages)
		private readonly advatagesRepository: Repository<BlockMainPageAdvantages>,
		@InjectRepository(BlockMainPageGallery)
		private readonly galleryRepository: Repository<BlockMainPageGallery>,
		@InjectRepository(BlockMainPageConsultation)
		private readonly consultationRepository: Repository<BlockMainPageConsultation>,
		@InjectRepository(Card) private readonly cardRepository: Repository<Card>,
	) {}

	async getMainPage(): Promise<MainPage[]> {
		return this.mainPageRepository.find({
			relations: {
				cards: true,
				advatages: true,
				gallery: true,
				consultations: true,
			},
		});
	}

	async createMainPage(dto: MainPageDto): Promise<MainPage> {
		const page = this.mainPageRepository.create(dto);
		return this.mainPageRepository.save(page);
	}

	async updateMainPage(dto: MainPageDto, id: number): Promise<UpdateResult> {
		return this.mainPageRepository.update(id, dto);
	}

	async createAdvatages(
		dto: AdvantagesBlockDto,
	): Promise<BlockMainPageAdvantages> {
		const block = this.advatagesRepository.create(dto);
		return this.advatagesRepository.save(block);
	}

	async updateAdvatages(
		dto: AdvantagesBlockDto,
		id: number,
	): Promise<UpdateResult> {
		return this.advatagesRepository.update(id, dto);
	}

	async createGallery(dto: GalleryBlockDto): Promise<BlockMainPageGallery> {
		const block = this.galleryRepository.create(dto);
		return this.galleryRepository.save(block);
	}

	async updateGallery(dto: GalleryBlockDto, id: number): Promise<UpdateResult> {
		return this.galleryRepository.update(id, dto);
	}

	async createConsultation(
		dto: ConsultationBlockDto,
	): Promise<BlockMainPageConsultation> {
		const block = this.consultationRepository.create(dto);
		return this.consultationRepository.save(block);
	}

	async updateConsultation(
		dto: ConsultationBlockDto,
		id: number,
	): Promise<UpdateResult> {
		return this.consultationRepository.update(id, dto);
	}

	async createCard(dto: CardDto): Promise<Card> {
		const card = this.cardRepository.create(dto);
		return this.cardRepository.save(card);
	}

	async updateCard(dto: CardDto, id: number): Promise<UpdateResult> {
		return this.cardRepository.update(id, dto);
	}
}
