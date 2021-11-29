import { AccountsService } from "./accounts.service";
import { Account } from "./schemas/accounts.schema";
export declare class AccountsController {
    private readonly accountService;
    constructor(accountService: AccountsService);
    findAll(): Promise<Account[]>;
    findById(id: string): Promise<Account[]>;
}
