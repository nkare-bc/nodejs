import { Model } from "mongoose";
import { Interaction, InteractionDocument } from "./schemas/interactions.schema";
export declare class InteractionsService {
    private readonly model;
    constructor(model: Model<InteractionDocument>);
    findAll(): Promise<Interaction[]>;
    findById(id: string): Promise<Interaction[]>;
}
