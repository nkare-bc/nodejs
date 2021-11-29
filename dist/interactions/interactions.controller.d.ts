import { InteractionsService } from "./interactions.service";
import { Interaction } from "./schemas/interactions.schema";
export declare class InteractionsController {
    private readonly interactionService;
    constructor(interactionService: InteractionsService);
    findAll(): Promise<Interaction[]>;
    findById(id: string): Promise<Interaction[]>;
}
