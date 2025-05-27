import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './models/category.model';
import { ProductModel } from 'src/product/models/product.model';

@Injectable()
export class CategoriesService {
  constructor(@InjectModel(Category) private model: typeof Category) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const category = await this.model.create({ ...createCategoryDto });
    return category;
  }

  async findAll() {
    return this.model.findAll({ include: { model: ProductModel } });
  }

  async findOne(id: number) {
    const category = await this.model.findByPk(id, {
      include: { model: ProductModel },
    });
    if (!category) return 'not found';
    return category;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.model.update(updateCategoryDto, {
      where: { id },
      returning: true,
    });
    return category[1][0];
  }

  async delete(id: number) {
    await this.model.destroy({ where: { id } });
    return 'success';
  }
}
