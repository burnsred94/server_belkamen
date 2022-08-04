import { Prop } from '@nestjs/mongoose';
import { ProductModel } from 'src/product/product.model';

export class Card {
  @Prop()
  title: string;
  @Prop()
  price: number;
  @Prop()
  description: string;
  @Prop()
  freeDescription: string;
}

export class BlockMainPageAdvantages {
  @Prop()
  title: string;
  @Prop()
  subTitle: string;
  @Prop()
  description: string;
}

export class BlockMainPageGallery {
  @Prop()
  title: string;
  @Prop(() => [String])
  image: string[];
}

export class BlockMainPageConsultation {
  @Prop()
  title: string;
  @Prop()
  subTitle: string;
  @Prop()
  description: string;
}

export class MainPage {
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop(() => [String])
  specificsWork: string[];
  @Prop()
  titleIndividualPlanWork: string;
  @Prop(() => [Card])
  cards: Card[];
  @Prop(() => [BlockMainPageAdvantages])
  advatages: BlockMainPageAdvantages[];
  @Prop(() => [BlockMainPageGallery])
  gallery: BlockMainPageGallery;
  @Prop(() => [BlockMainPageConsultation])
  consultations: BlockMainPageConsultation;
}

export class ProductCategory {
  @Prop()
  title: string;
  @Prop(() => [ProductModel])
  categoryProduct: ProductModel[];
}

export class CatalogPage {
  @Prop()
  title: string;
  @Prop(() => [ProductCategory])
  category: ProductCategory[];
}

export class AboutPage {
  @Prop()
  title: string;
  @Prop()
  description: string;
}

export class ContactsPage {
  @Prop()
  title: string;
  @Prop()
  email: string;
  @Prop()
  phone: string;
  @Prop()
  address: string;
  @Prop()
  city: string;
  @Prop()
  country: string;
}

export class Pages {
  @Prop()
  main: MainPage;
  @Prop()
  catalogue: CatalogPage;
  @Prop()
  about: AboutPage;
  @Prop()
  contacts: ContactsPage;
}
