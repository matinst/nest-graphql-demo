import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gpl'),
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    PetsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
