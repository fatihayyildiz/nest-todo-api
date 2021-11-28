import { IsEmail, IsString, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({
    description: 'Email of the user',
    required: true,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Name of the user',
    required: false,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Password of the user',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(7)
  password: string;
}

export default RegisterDto;
