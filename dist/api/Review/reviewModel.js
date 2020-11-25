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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Organizations_1 = require("../Organizations");
let Reviews = class Reviews extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Reviews.prototype, "uuid", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Reviews.prototype, "orgId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Reviews.prototype, "reviewer", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Reviews.prototype, "review", void 0);
__decorate([
    typeorm_1.Column({ default: false }),
    __metadata("design:type", Boolean)
], Reviews.prototype, "isValidated", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", String)
], Reviews.prototype, "created_on", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Number)
], Reviews.prototype, "modified_on", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", String)
], Reviews.prototype, "modified_by", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Organizations_1.Organizations, (org) => org.reviews),
    __metadata("design:type", Organizations_1.Organizations)
], Reviews.prototype, "org", void 0);
Reviews = __decorate([
    typeorm_1.Entity()
], Reviews);
exports.Reviews = Reviews;
