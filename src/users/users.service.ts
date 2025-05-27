import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { UserModel } from './entities/user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(UserModel) private model: typeof UserModel) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = await this.model.create({ ...CreateUserDto })
    return newUser
  }

  async findAll() {
    const users = await this.model.findAll();
    return users;
  }

  async findOne(id: number) {
    const user = await this.model.findByPk(id);
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const product = await this.model.update(updateUserDto, {where: { id }, returning : true});
    return product[1][0]
  }

  async remove(id: number) {
    await this.model.destroy({where: { id }})
    return { data: {} }
  }
}
