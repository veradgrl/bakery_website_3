import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ConfigModule} from '@nestjs/config';
import { CakesModule } from './cakes/cakes.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ItemsModule, UsersModule, CakesModule, ConfigModule.forRoot(), TypeOrmModule.forRoot({
    type: process.env.DB_TYPE as 'postgres',
    host: process.env.PG_HOST,
    port: parseInt(process.env.PG_PORT),
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DB,
    entities: [__dirname+'/**/*.entity{.ts,.js}'],
    synchronize: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
