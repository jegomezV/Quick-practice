import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MinLength,
  IsBoolean,
  IsMobilePhone,
  IsDate,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  first_name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  last_name: string;

  /* @IsDate()
  @IsNotEmpty() */
  dateOfBirth?: Date;

  @IsString()
  @IsOptional()
  address?: string;

  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;

  @IsMobilePhone()
  @IsNotEmpty()
  mobilePhone: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  @MinLength(3)
  name?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  @MinLength(8)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
    context: { skipMissingProperties: true },
  })
  password?: string;

  @IsDate()
  @IsOptional()
  dateOfBirth?: Date;

  @IsMobilePhone()
  @IsOptional()
  mobilePhone?: string;

  @IsString()
  @IsOptional()
  address?: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
