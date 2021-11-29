import { Model } from "mongoose";
import { Account, AccountDocument } from "./accounts/schemas/accounts.schema";
export declare class AppService {
    getHello(): string;
}
export declare class AccountService {
    private readonly model;
    constructor(model: Model<AccountDocument>);
    findAll(): Promise<Account[]>;
}
