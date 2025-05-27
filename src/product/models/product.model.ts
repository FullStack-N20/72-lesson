import {
  Column,
  Model,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Category } from 'src/categories/models/category.model';

interface IProduct {
  name: string;
  price: number;
}

@Table({ tableName: 'product' })
export class ProductModel extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.DECIMAL,
    allowNull: false,
  })
  price: number;

  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  categoryId: number;

  @BelongsTo(()=> Category, {
    onDelete: "CASCADE",
    onUpdate: 'CASCADE'
  })
  category: Category;
}

