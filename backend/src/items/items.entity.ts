import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Items {
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
ingredients: string;

@Column()
createdAt: number;

}