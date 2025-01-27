import { Type } from 'class-transformer';
import {
  IsArray,
  IsInt,
  IsOptional,
  IsPositive,
  ValidateNested,
} from 'class-validator';

class SaleItemDto {
  @IsInt()
  @IsPositive()
  itemId: number;

  @IsInt()
  @IsPositive()
  quantity: number;
}

export class CreateSaleDto {
  @IsInt()
  @IsPositive()
  @IsOptional()
  sellerId?: number;

  @IsInt()
  @IsPositive()
  customerId: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SaleItemDto)
  items: SaleItemDto[];
}
