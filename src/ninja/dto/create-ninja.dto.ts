import { IsString, MinLength } from 'class-validator';

export class CreateNinjaDto {
  @MinLength(3)
  name: string;

  @IsString()
  weapon: 'stars' | 'nunchucks';
}
