/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OwnerService } from '../owner/owner.service';
import { Repository } from 'typeorm';
import { createPetInput } from './dto/create-pet.input';
import { Pet } from './pet.entity';
import { Owner } from '../owner/owner.entity';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet) private petRepository: Repository<Pet>,
    private ownerService: OwnerService,
  ) {}

  createPet(createPetInput: createPetInput): Promise<Pet> {
    const newPet = this.petRepository.create(createPetInput); // newPet = new Pet();

    return this.petRepository.save(newPet); // insert
  }

  async findAll(): Promise<Pet[]> {
    return this.petRepository.find(); // SELECT * pet
  }

  findOne(id: number): Promise<Pet> {
    return this.petRepository.findOneOrFail({ where: { id: id } });
  }

  getOwner(ownerId: number): Promise<Owner> {
    return this.ownerService.findOne(ownerId);
  }
}
