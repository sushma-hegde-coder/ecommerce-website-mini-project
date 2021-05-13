import { OrderDetailService } from "./order-detail.service";
import { CreateOrderDetailDto } from "./dto/create-order-detail.dto";
import { UpdateOrderDetailDto } from "./dto/update-order-detail.dto";
export declare class OrderDetailController {
    private readonly orderDetailService;
    constructor(orderDetailService: OrderDetailService);
    create(createOrderDetailDto: CreateOrderDetailDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateOrderDetailDto: UpdateOrderDetailDto): string;
    remove(id: string): string;
}
