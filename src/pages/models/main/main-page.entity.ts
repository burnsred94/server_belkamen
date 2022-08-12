import { Pages } from 'src/pages/pages.entity';
import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class BlockMainPageConsultation {
	@PrimaryGeneratedColumn()
	id: number;
	@Column()
	title: string;
	@Column()
	subTitle: string;
	@Column()
	description: string;
	@OneToOne(() => MainPage, (main) => main.consultations)
	@JoinColumn()
	mainPage: MainPage['id'] = 1;
}

@Entity()
export class Card {
	@PrimaryGeneratedColumn()
	id: number;
	@Column()
	title: string;
	@Column()
	price: number;
	@Column({ type: 'simple-array' })
	description: string[];
	@Column({ type: 'simple-array' })
	freeDescription: string[];
	@ManyToOne(() => MainPage, (mainPage) => mainPage.cards)
	mainPage: MainPage['id'] = 1;
}

@Entity()
export class BlockMainPageAdvantages {
	@PrimaryGeneratedColumn('uuid')
	id: string;
	@Column()
	title: string;
	@Column()
	subTitle: string;
	@Column({ type: 'simple-array' })
	description: string[];
	@OneToOne(() => MainPage, (main) => main.advatages)
	@JoinColumn()
	mainPage: MainPage['id'] = 1;
}

@Entity()
export class BlockMainPageGallery {
	@PrimaryGeneratedColumn()
	id: number;
	@Column()
	title: string;
	@Column('simple-array')
	image: string[];
	@OneToOne(() => MainPage, (main) => main.gallery)
	@JoinColumn()
	mainPage: MainPage['id'] = 1;
}

@Entity()
export class MainPage {
	@PrimaryGeneratedColumn()
	id: number;
	@Column()
	title: string;
	@Column()
	description: string;
	@Column('simple-array')
	specificsWork: string[];
	@Column('simple-array')
	titleIndividualPlanWork: string[];
	@OneToMany(() => Card, (cards) => cards.mainPage)
	cards: Card[];
	@OneToOne(() => BlockMainPageAdvantages, (advatages) => advatages.mainPage)
	advatages: BlockMainPageAdvantages;
	@OneToOne(() => BlockMainPageGallery, (gallery) => gallery.mainPage)
	gallery: BlockMainPageGallery;
	@OneToOne(
		() => BlockMainPageConsultation,
		(consultation) => consultation.mainPage,
	)
	consultations: BlockMainPageConsultation;
	@OneToOne(() => Pages, (pages) => pages.main)
	@JoinColumn()
	pages: Pages;
}
