import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountsModule } from "./accounts/accounts.module";
import { InteractionsModule } from "./interactions/interactions.module";

@Module({
  imports: [
      MongooseModule.forRoot('const uri = "mongodb+srv://confluent_cloud_sink_user:thisIsAPassword@dev-cluster.aiwyo.mongodb.net/ddil_group_database?retryWrites=true&w=majority";'),
      AccountsModule,
      InteractionsModule
  ],

})
export class AppModule {}
