import { SEX_TYPES } from '../../../config/types';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  name: string;

  @Column({ type: 'varchar', length: 30 })
  surname: string;

  @Column({ type: 'integer' })
  age: number;

  @Column({ type: 'enum', enum: SEX_TYPES })
  sex: SEX_TYPES;

  @Column({ type: 'boolean', default: false })
  problems: boolean;
}
