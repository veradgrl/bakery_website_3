import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cakes } from './cakes.entity';

@Injectable()
export class CakesService {
    constructor(
        @InjectRepository(Cakes)
        private cakesRepository: Repository<Cakes>,
    ){}

    // get all the Cakes
    async findall(): Promise<Cakes[]> {
        return await this.cakesRepository.find();
    }

    // get one cake
    async findOne(id: number): Promise<Cakes> {
        return await this.cakesRepository.findOne({where : { id }});
    }

    //create cake
    async create(cake: Cakes): Promise<Cakes>{
        const newCake = this.cakesRepository.create(cake);
        return await this.cakesRepository.save(newCake);
    }

    // update cake
    async update(id: number,  cake: Cakes): Promise<Cakes> {
        await this.cakesRepository.update(id, cake);
        return await this.cakesRepository.findOne( { where : {id} } );
    }

    //delete cake
    async delete(id:number): Promise<void> {
        await this.cakesRepository.delete(id);
    }

}
