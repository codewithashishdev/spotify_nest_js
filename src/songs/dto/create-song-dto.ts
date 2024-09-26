import {
  IsArray,
  IsDateString,
  IsMilitaryTime,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreatSeongsDTO {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  readonly artists: string[];

  @IsNotEmpty()
  @IsDateString()
  readonly realeseDate: Date;

  @IsNotEmpty()
  @IsMilitaryTime()
  readonly duration: Date;
}
