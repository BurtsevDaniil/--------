import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { SEX_TYPES } from 'src/config/types';

export class CreateUserQueryDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  //   @IsNotEmpty()
  @IsString()
  surname: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;

  @IsEnum(SEX_TYPES)
  @IsNotEmpty()
  sex: SEX_TYPES;

  @IsOptional()
  problems: boolean = false;
}
