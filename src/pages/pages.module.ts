import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
	Card,
	MainPage,
	BlockMainPageAdvantages,
	BlockMainPageGallery,
	BlockMainPageConsultation,
	CatalogPage,
	AboutPage,
	ContactsPage,
	ProductCategory,
	Category,
} from './models';
import { MenuController } from './pages.controller';
import { Pages } from './pages.entity';
import { MenuService } from './pages.service';
import {
	AboutController,
	CatalogController,
	ContactsController,
	MainPageController,
} from './controllers';
import {
	AboutPageService,
	CatalogPageService,
	ContactsPageService,
	MainPageService,
} from './services';

@Module({
	controllers: [
		MenuController,
		MainPageController,
		CatalogController,
		AboutController,
		ContactsController,
	],
	imports: [
		TypeOrmModule.forFeature([
			Pages,
			Card,
			MainPage,
			BlockMainPageAdvantages,
			BlockMainPageGallery,
			BlockMainPageConsultation,
			CatalogPage,
			AboutPage,
			ContactsPage,
			Category,
			ProductCategory,
		]),
	],
	providers: [
		MenuService,
		Pages,
		ContactsPageService,
		MainPageService,
		AboutPageService,
		CatalogPageService,
	],
})
export class TopPageModule {}
