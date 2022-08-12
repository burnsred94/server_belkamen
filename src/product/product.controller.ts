import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	NotFoundException,
	Param,
	Patch,
	Post,
	UnauthorizedException,
	UseGuards,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { IdValidationPipe } from 'src/pipes/ad-validation.pipe';
import { CreateProductDto } from './dto/create-product.dto';
import { FindProductDto } from './dto/find.product';
import { PRODUCT_NOT_FOUND_ERROR } from './product.constans';
import { ProductEntity } from './models/product.entity';
import { ProductService } from './product.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('product')
export class ProductController {
	constructor(private readonly productService: ProductService) {}

	@UsePipes(new ValidationPipe())
	@UseGuards(JwtAuthGuard)
	@Post('/create')
	async create(@Body() dto: CreateProductDto) {
		try {
			return this.productService.create(dto);
		} catch (e) {
			throw new UnauthorizedException(e);
		}
	}

	@Get('/getAll')
	async getAllProducts() {
		return this.productService.getAll();
	}

	@Get(':id')
	async get(@Param('id', IdValidationPipe) id: number) {
		const product = await this.productService.findById(id);
		if (!product) {
			throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
		}
		return product;
	}

	@UseGuards(JwtAuthGuard)
	@Delete(':id')
	async delete(@Param('id', IdValidationPipe) id: number) {
		const deleteProduct = await this.productService.findById(id);
		if (!deleteProduct) {
			throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
		}
	}

	@UseGuards(JwtAuthGuard)
	@Patch(':id')
	async patch(
		@Param('id', IdValidationPipe) id: number,
		@Body() dto: ProductEntity,
	) {
		const updateProduct = await this.productService.updateById(id, dto);
		if (!updateProduct) {
			throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
		}

		return updateProduct;
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('find')
	async find(@Body() { category }: FindProductDto) {
		const categoryProduct = await this.productService.findByCategory(category);
		if (!categoryProduct) {
			throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
		}
		return categoryProduct;
	}
}
