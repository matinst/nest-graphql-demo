import { Field, InputType, Int } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';

@InputType()
export class createPetInput {
  @IsAlpha()
  @Field()
  name: string;

  @Field({ nullable: true })
  type?: string;

  @Field((type) => Int)
  ownerId: number;
}
