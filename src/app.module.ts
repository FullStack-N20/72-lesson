import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductModule } from './product/product.module';
import { ProductModel } from './product/models/product.model';

import { UserModel } from './users/entities/user.model';
import { CategoriesModule } from './categories/categories.module';
import { Category } from './categories/models/category.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: String(process.env.PG_PASSWORD),
      database: process.env.PG_DB_NAME,
      autoLoadModels: true,
      models: [ProductModel, Category],
      synchronize: true,
    }),
    ProductModule,
    
    CategoriesModule,
  ],
})
export class AppModule {}
