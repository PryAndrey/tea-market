import { Module } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sale } from './entities/sale.entity';
import { SaleToItem } from 'src/sale-to-items/entities/sale-to-item.entity';
import { ItemsModule } from 'src/items/items.module';
import { SellersModule } from 'src/sellers/sellers.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Sale, SaleToItem]),
    ItemsModule,
    SellersModule,
  ],
  controllers: [SalesController],
  providers: [SalesService],
})
export class SalesModule {}