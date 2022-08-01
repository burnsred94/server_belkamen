import { ProductModel } from 'src/product/product.model';

export interface Card {
  title: string;
  price: number;
  description: string;
  freeDescription: string;
}

export interface MainPage {
  title: string;
  description: string;
  specificsWork: string[];
  titleIndividualPlanWork: string;
  cards: Card[];
  advatages: {
    title: string;
    subTitle: string;
    description: string;
  }[];
  gallery: {
    title: string;
    image: string[];
  };
  consultations: {
    title: string;
    subTitle: string;
    description: string;
  };
}

export interface CatalogPage {
  title: string;
  monuments: {
    title: string;
    category: ProductModel['category'];
  };
  fences: {
    title: string;
    category: ProductModel['category'];
  };
  landscaping: {
    title: string;
    category: ProductModel['category'];
  };
  productsGranit: {
    title: string;
    category: ProductModel['category'];
  };
  complexes: {
    title: string;
    category: ProductModel['category'];
  };
}

export interface AboutPage {
  title: string;
  description: string;
}

export interface ContactsPage {
  title: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
}

export interface Pages {
  main: MainPage;
  catalogue: CatalogPage;
  about: AboutPage;
  contacts: ContactsPage;
}
