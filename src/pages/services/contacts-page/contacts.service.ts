import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactsPageDto } from 'src/pages/controllers/contacts/dto/contacts.dto';
import { ContactsPage } from 'src/pages/models';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class ContactsPageService {
	constructor(
		@InjectRepository(ContactsPage)
		private readonly contactsPage: Repository<ContactsPage>,
	) {}

	async getPage(): Promise<ContactsPage[]> {
		return this.contactsPage.find();
	}

	async createPage(dto: ContactsPageDto): Promise<ContactsPage> {
		const newPage = this.contactsPage.create(dto);
		return this.contactsPage.save(newPage);
	}

	async updatePage(id: number, dto: ContactsPageDto): Promise<UpdateResult> {
		return this.contactsPage.update(id, dto);
	}
}
