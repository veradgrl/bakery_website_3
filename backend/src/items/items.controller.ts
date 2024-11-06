import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Items } from './items.entity';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService ){}

    // get all users
    @Get()
    async findAll(): Promise<Items[]> {
        return await this.itemsService.findall();
    }

    //get one user
    @Get(':id')
    async findOne(@Param('id') id: number):  Promise<Items> {
        const item = await  this.itemsService.findOne(id);
        if (!item) {
            throw new Error('Item is not found');
        }else{
            return item;
        }
    }
    
    //create item
    @Post()
    async create(@Body() item: Items): Promise<Items>{
        return await this.itemsService.create(item);
    }

    //update item
    @Put(':id')
    async update(@Param('id') id:number, @Body() item: Items): Promise<Items>{
        return this.itemsService.update(id, item)
    }

    //delete items
    @Delete(':id')
    async delete(@Param('id') id:number): Promise<void> {
        // handle the error if item is not found
        const item = await this.itemsService.findOne(id);
        if(!item){
            throw new Error('Item is not found');
        }
        return this.itemsService.delete(id);
    }
}
