import {ApiProperty} from "@nestjs/swagger";

export class ContactDto{
    @ApiProperty()
    phoneNumber: string;

    @ApiProperty()
    addressLine1: string;

    @ApiProperty()
    addressLine2: string;

    @ApiProperty()
    city: string;

    @ApiProperty()
    state: string;

    @ApiProperty()
    zip: string;
}