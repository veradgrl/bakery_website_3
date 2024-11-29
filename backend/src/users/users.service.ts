import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
    ){}

    // get all the users
    async findall(): Promise<Users[]> {
        return await this.usersRepository.find();
    }

    // get one item
    async findOne(id: number): Promise<Users> {
        return await this.usersRepository.findOne({where : { id }});
    }

    //create item
    async create(item: Users): Promise<Users>{
        const newItem = this.usersRepository.create(item);
        return await this.usersRepository.save(newItem);
    }

    // update item
    async update(id: number,  item: Users): Promise<Users> {
        await this.usersRepository.update(id, item);
        return await this.usersRepository.findOne( { where : {id} } );
    }

    //delete item
    async delete(id:number): Promise<void> {
        await this.usersRepository.delete(id);
    }

}
