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
exports.InteractionSchema = exports.Interaction = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Interaction = class Interaction {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Interaction.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Interaction.prototype, "Benefit_Verification_Number", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Interaction.prototype, "Created", void 0);
Interaction = __decorate([
    (0, mongoose_1.Schema)()
], Interaction);
exports.Interaction = Interaction;
exports.InteractionSchema = mongoose_1.SchemaFactory.createForClass(Interaction);
//# sourceMappingURL=interactions.schema.js.map