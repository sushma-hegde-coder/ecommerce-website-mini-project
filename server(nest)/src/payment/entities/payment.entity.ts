import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity({ name: "payment" })
export class Payment {
  @PrimaryGeneratedColumn()
  paymentId: number;

  @Column()
  paymentDate: Date;

  @Column()
  paymentStatus: string;

  @Column()
  payAmount: number;
}
