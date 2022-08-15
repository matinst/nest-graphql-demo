import { Module } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerResolver } from './owner.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Owner } from './owner.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Owner])],
  providers: [OwnerResolver, OwnerService],
  exports: [OwnerService],
})
export class OwnerModule {}
