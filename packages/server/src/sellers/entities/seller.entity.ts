import { Sale } from 'src/sales/entities/sale.entity';
import { Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('sellers')
export class Seller {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Sale, (sale) => sale.seller)
  sales: Sale[];
}