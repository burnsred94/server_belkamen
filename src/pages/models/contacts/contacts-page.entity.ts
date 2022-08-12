import { Pages } from 'src/pages/pages.entity';
import {
	Column,
	Entity,
	JoinColumn,
	OneToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ContactsPage {
	@PrimaryGeneratedColumn()
	id: number;
	@Column()
	title: string;
	@Column()
	email: string;
	@Column('simple-array')
	phone: string[];
	@Column()
	address: string;
	@Column()
	city: string;
	@Column('simple-array')
	timeWork: string[];
	@OneToOne(() => Pages, (pages) => pages.contacts)
	@JoinColumn()
	pages: Pages['id'] = 1;
}
