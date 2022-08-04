import { Pages } from './models/page.models';
import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum TopLevelCategory {
  Main,
  Catalogue,
  Portfolio,
  About,
  Contacts,
}
export type TopPageDocuments = TopPageModel & Document;
@Schema()
export class TopPageModel {
  @Prop({ enum: TopLevelCategory })
  firstCategory: TopLevelCategory;
  @Prop()
  secondCategory: string;
  @Prop()
  title: string;
  @Prop()
  pages: Pages;
}

export const TopPageSchema = SchemaFactory.createForClass(TopPageModel);
