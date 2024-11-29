import { Module } from '@nestjs/common';
import { CakesController } from './cakes.controller';
import { CakesService } from './cakes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cakes } from './cakes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cakes])],
  controllers: [CakesController],
  providers: [CakesService]
})
export class CakesModule {}
