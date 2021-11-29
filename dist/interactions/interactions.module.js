"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractionsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const interactions_service_1 = require("./interactions.service");
const interactions_schema_1 = require("./schemas/interactions.schema");
const interactions_controller_1 = require("./interactions.controller");
let InteractionsModule = class InteractionsModule {
};
InteractionsModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: interactions_schema_1.Interaction.name, schema: interactions_schema_1.InteractionSchema }])],
        controllers: [interactions_controller_1.InteractionsController],
        providers: [interactions_service_1.InteractionsService],
    })
], InteractionsModule);
exports.InteractionsModule = InteractionsModule;
//# sourceMappingURL=interactions.module.js.map