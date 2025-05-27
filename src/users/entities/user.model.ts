import { Column, Model, Table, DataType} from 'sequelize-typescript';


@Table({tableName: 'users'})
export class UserModel extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string;

    @Column({
        type: DataType.DECIMAL,
        allowNull: false
    })
    age: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    phoneNumber: string;
}