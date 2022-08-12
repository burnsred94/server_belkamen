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
import { ContactsPageService } from 'src/pages/services';
import { ContactsPageDto } from './dto/contacts.dto';

@Controller('contacts')
export class ContactsController {
	constructor(private readonly contactsService: ContactsPageService) {}

	@Get()
	async getPage() {
		const page = await this.contactsService.getPage();
		if (!page) {
			throw new NotFoundException();
		}
		return page;
	}

	@UseGuards(JwtAuthGuard)
	@Post('create')
	async createContacts(@Body() dto: ContactsPageDto) {
		try {
			const page = await this.contactsService.createPage(dto);
			return page;
		} catch (e) {
			throw new BadRequestException();
		}
	}

	@Patch('/:id')
	async updateContacts(@Body() dto: ContactsPageDto, @Param() id: number) {
		try {
			return await this.contactsService.updatePage(id, dto);
		} catch (e) {
			throw new BadRequestException();
		}
	}
}
