import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "orders" })
export class Order {
  @PrimaryGeneratedColumn()
  orderId: number;

  @Column({ default: 0, type: "decimal" })
  orderAmount: number;

  @Column()
  shippingDate: Date;

  @Column({ nullable: false })
  status: string;

  @Column()
  orderDate: Date;
}
