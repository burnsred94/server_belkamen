import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = ProductModel & Document;
@Schema()
export class ProductModel {
  @Prop()
  image: string;
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  price: number;
  @Prop()
  oldPrice: number;
  @Prop()
  category: string;
}

export const ProductSchema = SchemaFactory.createForClass(ProductModel);
