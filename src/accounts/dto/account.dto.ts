import {ApiProperty} from "@nestjs/swagger";

export class AccountDto{
    @ApiProperty()
    id: string;

    @ApiProperty()
    accountName: number;

    @ApiProperty()
    businessName: string;
}