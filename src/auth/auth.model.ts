import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AuthDocument = AuthModel & Document;

@Schema()
export class AuthModel {
  @Prop({ unique: true })
  email: string;
  @Prop()
  passwordhash: string;

  createdAt: Date;
}

export const AuthSchema = SchemaFactory.createForClass(AuthModel);
