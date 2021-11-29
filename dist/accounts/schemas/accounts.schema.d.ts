import { Document } from 'mongoose';
import { Contact } from "./owners.schema";
import * as mongoose from "mongoose";
export declare type AccountDocument = Account & Document;
export declare class Account {
    id: string;
    accountName: number;
    businessName: string;
    owner: Contact[];
}
export declare const AccountSchema: mongoose.Schema<Document<Account, any, any>, mongoose.Model<Document<Account, any, any>, any, any, any>, {}>;
