import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AboutPage, CatalogPage, ContactsPage, MainPage } from './models';

@Entity()
export class Pages {
	@PrimaryGeneratedColumn()
	id: number;
	@Column('simple-array')
	firstCategory: string[];
	@Column()
	logo: string;
	@OneToOne(() => MainPage, (main) => main.pages)
	main: MainPage;
	@OneToOne(() => AboutPage, (about) => about.pages)
	about: AboutPage;
	@OneToOne(() => CatalogPage, (catalog) => catalog.pages)
	catalog: CatalogPage;
	@OneToOne(() => ContactsPage, (contacts) => contacts.pages)
	contacts: ContactsPage;
}
