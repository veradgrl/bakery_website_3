import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CakesService } from './cakes.service';
import { Cakes } from './cakes.entity';

@Controller('cakes')
export class CakesController {
    constructor(private readonly cakesService: CakesService ){}

    // get all Cakes
    @Get()
    async findAll(): Promise<Cakes[]> {
        return await this.cakesService.findall();
    }

    //get one item
    @Get(':id')
    async findOne(@Param('id') id: number):  Promise<Cakes> {
        const cake = await  this.cakesService.findOne(id);
        if (!cake) {
            throw new Error('cake is not found');
        }else{
            return cake;
        }
    }
    
    //create cake
    @Post()
    async create(@Body() cake: Cakes): Promise<Cakes>{
        return await this.cakesService.create(cake);
    }

    //update cake
    @Put(':id')
    async update(@Param('id') id:number, @Body() cake: Cakes): Promise<Cakes>{
        return this.cakesService.update(id, cake)
    }

    //delete Cakes
    @Delete(':id')
    async delete(@Param('id') id:number): Promise<void> {
        // handle the error if cake is not found
        const cake = await this.cakesService.findOne(id);
        if(!cake){
            throw new Error('cake is not found');
        }
        return this.cakesService.delete(id);
    }
}
