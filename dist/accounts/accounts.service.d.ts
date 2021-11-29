import { Model } from "mongoose";
import { Account, AccountDocument } from "./schemas/accounts.schema";
export declare class AccountsService {
    private readonly model;
    constructor(model: Model<AccountDocument>);
    findAll(): Promise<Account[]>;
    findById(id: string): Promise<Account[]>;
}
