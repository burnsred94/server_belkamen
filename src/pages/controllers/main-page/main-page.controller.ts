import {
	BadRequestException,
	Body,
	Controller,
	Get,
	NotFoundException,
	Param,
	Patch,
	Post,
} from '@nestjs/common';
import {
	BlockMainPageAdvantages,
	BlockMainPageConsultation,
	BlockMainPageGallery,
	Card,
	MainPage,
} from 'src/pages/models';
import { MainPageService } from 'src/pages/services';
import { UpdateResult } from 'typeorm';
import { AdvantagesBlockDto } from './dto/adventages.dto';
import { CardDto } from './dto/card.dto';
import { ConsultationBlockDto } from './dto/consultation.dto';
import { GalleryBlockDto } from './dto/gallery.dto';
import { MainPageDto } from './dto/main.dto';

@Controller('main')
export class MainPageController {
	constructor(private readonly mainPageService: MainPageService) {}

	@Get()
	async getMainPage(): Promise<MainPage[]> {
		const page = await this.mainPageService.getMainPage();
		if (!page) {
			throw new NotFoundException();
		}
		return page;
	}

	@Post('create')
	async createMainPage(@Body() dto: MainPageDto): Promise<MainPage> {
		try {
			return await this.mainPageService.createMainPage(dto);
		} catch (e) {
			throw new BadRequestException();
		}
	}

	@Patch('/:id')
	async updateMainPage(
		@Body() dto: MainPageDto,
		@Param('id') id: number,
	): Promise<UpdateResult> {
		try {
			return await this.mainPageService.updateMainPage(dto, id);
		} catch (e) {
			throw new BadRequestException();
		}
	}

	@Post('/gallery/create')
	async createGallery(
		@Body() dto: GalleryBlockDto,
	): Promise<BlockMainPageGallery> {
		try {
			return await this.mainPageService.createGallery(dto);
		} catch (e) {
			throw new BadRequestException();
		}
	}

	@Patch('/gallery/:id')
	async updateGallery(
		@Body() dto: GalleryBlockDto,
		@Param('id') id: number,
	): Promise<UpdateResult> {
		try {
			return await this.mainPageService.updateGallery(dto, id);
		} catch (e) {
			throw new BadRequestException();
		}
	}

	@Post('consultation/create')
	async createConsultation(
		@Body() dto: ConsultationBlockDto,
	): Promise<BlockMainPageConsultation> {
		try {
			return await this.mainPageService.createConsultation(dto);
		} catch (e) {
			throw new BadRequestException();
		}
	}

	@Patch('consultation/:id')
	async updateContacts(
		@Body() dto: ConsultationBlockDto,
		@Param('id') id: number,
	): Promise<UpdateResult> {
		try {
			return await this.mainPageService.updateConsultation(dto, id);
		} catch (e) {
			throw new BadRequestException();
		}
	}

	@Post('advatages/create')
	async createAdvatages(
		@Body() dto: AdvantagesBlockDto,
	): Promise<BlockMainPageAdvantages> {
		try {
			return await this.mainPageService.createAdvatages(dto);
		} catch (e) {
			throw new BadRequestException();
		}
	}

	@Patch('advatages/:id')
	async updateAdvatages(
		@Body() dto: AdvantagesBlockDto,
		@Param('id') id: number,
	): Promise<UpdateResult> {
		try {
			return await this.mainPageService.updateAdvatages(dto, id);
		} catch (e) {
			throw new BadRequestException();
		}
	}

	@Post('card/create')
	async cardCreate(@Body() dto: CardDto): Promise<Card> {
		try {
			return await this.mainPageService.createCard(dto);
		} catch (e) {
			throw new BadRequestException();
		}
	}

	@Patch('card/update/:id')
	async cardUpdate(
		@Body() dto: CardDto,
		@Param('id') id: number,
	): Promise<UpdateResult> {
		try {
			return await this.mainPageService.updateCard(dto, id);
		} catch (e) {
			throw new BadRequestException();
		}
	}
}
