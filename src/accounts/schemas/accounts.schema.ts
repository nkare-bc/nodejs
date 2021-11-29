import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Contact} from "./owners.schema";
import * as mongoose from "mongoose";

export type AccountDocument = Account & Document;

@Schema()
export class Account {
    @Prop()
    id: string;

    @Prop()
    accountName: number;

    @Prop()
    businessName: string;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Contact' }] })
    owner: Contact[];
}

export const AccountSchema = SchemaFactory.createForClass(Account);