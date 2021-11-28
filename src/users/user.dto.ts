import { IsString, IsEmail, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDTO implements Readonly<UserDTO> {
  @IsNumber()
  id: number;

  @ApiProperty({
    description: 'Unique user email address for activate user account',
    required: true,
    type: String,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Name of the user which will show publicly',
    required: false,
    type: String,
  })
  @IsString()
  name: string;

  @IsString()
  password: string;

  public static from(dto: Partial<UserDTO>) {
    const it = new UserDTO();
    it.id = dto.id;
    it.email = dto.email;
    it.name = dto.name;

    return it;
  }

  public static fromEntity(entity: UserDTO) {
    return this.from({
      id: entity.id,
      email: entity.email,
      name: entity.name,
    });
  }

  public static toEntity(dto: Partial<UserDTO>) {
    const it = new UserDTO();
    it.email = dto.email;
    it.name = dto.name;
    it.password = dto.password;
    return it;
  }
}
