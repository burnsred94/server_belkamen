import { Pages } from './interfaces/page.interface';

export enum TopLevelCategory {
  Main,
  Catalogue,
  Portfolio,
  About,
  Contacts,
}

export class TopPageModel {
  _id: string;
  firstCategory: TopLevelCategory;
  secondCategory: string;
  title: string;
  pages: Pages;
}
