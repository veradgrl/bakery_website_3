import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Items } from './items.entity';

@Injectable()
export class ItemsService {
    constructor(
        @InjectRepository(Items)
        private itemsRepository: Repository<Items>,
    ){}

    // get all the items
    async findall(): Promise<Items[]> {
        return await this.itemsRepository.find();
    }

    // get one item
    async findOne(id: number): Promise<Items> {
        return await this.itemsRepository.findOne({where : { id }});
    }

    //create item
    async create(item: Items): Promise<Items>{
        const newItem = this.itemsRepository.create(item);
        return await this.itemsRepository.save(newItem);
    }

    // update item
    async update(id: number,  item: Items): Promise<Items> {
        await this.itemsRepository.update(id, item);
        return await this.itemsRepository.findOne( { where : {id} } );
    }

    //delete item
    async delete(id:number): Promise<void> {
        await this.itemsRepository.delete(id);
    }

}
