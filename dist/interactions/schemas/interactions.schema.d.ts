import { Document } from 'mongoose';
import * as mongoose from "mongoose";
export declare type InteractionDocument = Interaction & Document;
export declare class Interaction {
    _id: string;
    Benefit_Verification_Number: string;
    Created: string;
}
export declare const InteractionSchema: mongoose.Schema<Document<Interaction, any, any>, mongoose.Model<Document<Interaction, any, any>, any, any, any>, {}>;
