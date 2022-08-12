import { Pages } from 'src/pages/pages.entity';
import { ProductEntity } from 'src/product/models/product.entity';
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
export class Category {
	@PrimaryGeneratedColumn()
	id: number;
	@Column()
	title: string;
	@OneToMany(() => ProductCategory, (catalogs) => catalogs.catalog)
	productCategory: ProductCategory[];
	@ManyToOne(() => CatalogPage, (page) => page.category)
	@JoinColumn()
	page: CatalogPage['id'] = 1;
}

@Entity()
export class ProductCategory {
	@PrimaryGeneratedColumn()
	id: number;
	@Column()
	nameCategory: string;
	@Column()
	title: string;
	@OneToMany(() => ProductEntity, (products) => products.catalog)
	products: ProductEntity[];
	@ManyToOne(() => Category, (category) => category.productCategory)
	@JoinColumn()
	catalog: Category;
}

@Entity()
export class CatalogPage {
	@PrimaryGeneratedColumn()
	id: number;
	@Column()
	title: string;
	@OneToMany(() => Category, (category) => category.page)
	category: Category[];
	@OneToOne(() => Pages, (pages) => pages.catalog)
	@JoinColumn()
	pages: Pages['id'] = 1;
}
