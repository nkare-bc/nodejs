import { Document } from 'mongoose';
export declare type ContactDocument = Contact & Document;
export declare class Contact {
    phoneNumber: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    zip: string;
}
export declare const ContactSchema: import("mongoose").Schema<Document<Contact, any, any>, import("mongoose").Model<Document<Contact, any, any>, any, any, any>, {}>;
