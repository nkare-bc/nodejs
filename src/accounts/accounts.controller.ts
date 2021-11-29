import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import {AccountDto} from "./dto/account.dto";
import {AccountsService} from "./accounts.service";
import {ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags} from "@nestjs/swagger";
import {Account} from "./schemas/accounts.schema";



@ApiTags('accounts')
@Controller('accounts')
export class AccountsController {
    constructor(private readonly accountService: AccountsService) {
    }

    @ApiOkResponse({
        description: 'Retrieved all accounts',
        type: Account
    })
    @ApiInternalServerErrorResponse({
        description: 'Internal server error',
    })
    @Get()
    async findAll() {
        return await this.accountService.findAll()
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return await this.accountService.findById(id);
    }


}