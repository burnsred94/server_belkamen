import { Pages } from 'src/pages/pages.entity';
import {
	Column,
	Entity,
	JoinColumn,
	OneToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class AboutPage {
	@PrimaryGeneratedColumn()
	id: number;
	@Column()
	title: string;
	@Column({ type: 'longtext' })
	description: string;
	@Column()
	logo: string;
	@Column('simple-array')
	services: string[];
	@Column()
	subTitle: string;
	@Column({ type: 'longtext' })
	subDescription: string;
	@OneToOne(() => Pages, (page) => page.about)
	@JoinColumn()
	pages: Pages;
}
