import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService ){}

    // get all Users
    @Get()
    async findAll(): Promise<Users[]> {
        return await this.usersService.findall();
    }

    //get one item
    @Get(':id')
    async findOne(@Param('id') id: number):  Promise<Users> {
        const item = await  this.usersService.findOne(id);
        if (!item) {
            throw new Error('Item is not found');
        }else{
            return item;
        }
    }
    
    //create item
    @Post()
    async create(@Body() item: Users): Promise<Users>{
        return await this.usersService.create(item);
    }

    //update item
    @Put(':id')
    async update(@Param('id') id:number, @Body() item: Users): Promise<Users>{
        return this.usersService.update(id, item)
    }

    //delete Users
    @Delete(':id')
    async delete(@Param('id') id:number): Promise<void> {
        // handle the error if item is not found
        const item = await this.usersService.findOne(id);
        if(!item){
            throw new Error('Item is not found');
        }
        return this.usersService.delete(id);
    }
}
