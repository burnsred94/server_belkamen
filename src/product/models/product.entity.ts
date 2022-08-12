import { ProductCategory } from 'src/pages/models/catalog/catalog-page.entity';
import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ProductEntity {
	@PrimaryGeneratedColumn()
	id: number;
	@Column()
	image: string;
	@Column()
	title: string;
	@Column()
	description: string;
	@Column()
	price: number;
	@Column({ default: 0 })
	oldPrice?: number;
	@Column()
	category: string;
	@ManyToOne(
		() => ProductCategory,
		(categoryProduct) => categoryProduct.products,
	)
	@JoinColumn()
	catalog: ProductCategory;
}
