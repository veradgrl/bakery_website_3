import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Cakes {
@PrimaryGeneratedColumn()
id: number;

@Column()
category: string;

@Column()
title: string;

@Column()
price: number;

@Column()
intro: string;

@Column()
img: string;

@Column()
ingredients: string;

}