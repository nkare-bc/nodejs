import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {AccountsController} from "./accounts.controller";
import {AccountsService} from "./accounts.service";
import {Account, AccountSchema} from "./schemas/accounts.schema";

@Module({
    imports: [MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }])],
    controllers: [AccountsController],
    providers: [AccountsService],
})
export class AccountsModule {}
