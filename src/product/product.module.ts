import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './product.controller';
import { ProductEntity } from './models/product.entity';
import { ProductService } from './product.service';
@Module({
	controllers: [ProductController],
	imports: [TypeOrmModule.forFeature([ProductEntity])],
	providers: [ProductService],
})
export class ProductModule {}
