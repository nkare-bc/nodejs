import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {ApiProperty} from "@nestjs/swagger";


export type ContactDocument = Contact & Document;

@Schema()
export class Contact {
    @Prop()
    phoneNumber: string;

    @Prop()
    addressLine1: string;

    @Prop()
    addressLine2: string;

    @Prop()
    city: string;

    @Prop()
    state: string;

    @Prop()
    zip: string;


}

export const ContactSchema = SchemaFactory.createForClass(Contact);