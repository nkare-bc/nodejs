import { Injectable, Logger } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Account, AccountDocument} from "./schemas/accounts.schema";
import {AccountDto} from "./dto/account.dto";


@Injectable()
export class AccountsService {
    constructor(@InjectModel(Account.name) private readonly model: Model<AccountDocument>) {
    }

    async findAll(): Promise<Account[]> {
        Logger.log("In Service");
        return await this.model.find().exec();
    }

    async findById(id: string): Promise<Account[]> {
        return await this.model.find({"id": id}).exec();
    }
}
