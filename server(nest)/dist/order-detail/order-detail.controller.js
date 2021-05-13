"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailController = void 0;
const common_1 = require("@nestjs/common");
const order_detail_service_1 = require("./order-detail.service");
const create_order_detail_dto_1 = require("./dto/create-order-detail.dto");
const update_order_detail_dto_1 = require("./dto/update-order-detail.dto");
const swagger_1 = require("@nestjs/swagger");
let OrderDetailController = class OrderDetailController {
    constructor(orderDetailService) {
        this.orderDetailService = orderDetailService;
    }
    create(createOrderDetailDto) {
        return this.orderDetailService.create(createOrderDetailDto);
    }
    findAll() {
        return this.orderDetailService.findAll();
    }
    findOne(id) {
        return this.orderDetailService.findOne(+id);
    }
    update(id, updateOrderDetailDto) {
        return this.orderDetailService.update(+id, updateOrderDetailDto);
    }
    remove(id) {
        return this.orderDetailService.remove(+id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_detail_dto_1.CreateOrderDetailDto]),
    __metadata("design:returntype", void 0)
], OrderDetailController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderDetailController.prototype, "findAll", null);
__decorate([
    common_1.Get(":id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderDetailController.prototype, "findOne", null);
__decorate([
    common_1.Patch(":id"),
    __param(0, common_1.Param("id")),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_order_detail_dto_1.UpdateOrderDetailDto]),
    __metadata("design:returntype", void 0)
], OrderDetailController.prototype, "update", null);
__decorate([
    common_1.Delete(":id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderDetailController.prototype, "remove", null);
OrderDetailController = __decorate([
    swagger_1.ApiTags("Order-details"),
    common_1.Controller("order-detail"),
    __metadata("design:paramtypes", [order_detail_service_1.OrderDetailService])
], OrderDetailController);
exports.OrderDetailController = OrderDetailController;
//# sourceMappingURL=order-detail.controller.js.map