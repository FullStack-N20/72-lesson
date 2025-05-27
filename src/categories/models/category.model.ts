import {
  Column,
  DataType,
  Table,
  Model,
  HasMany,
} from 'sequelize-typescript';
import { ProductModel } from 'src/product/models/product.model'; 
4;
@Table({ tableName: 'categories' })
export class Category extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  description: string;

  @HasMany(() => ProductModel)
  product: ProductModel[];
}
