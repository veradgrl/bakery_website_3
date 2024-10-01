"use client";

import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image"; 
import React from "react";

interface BreakfastItem {
  title: string;
  img: string;
  price: string;
  intro:string
}

export default function BreakfastPage() {
  const list: BreakfastItem[] = [
    {
      title: "all in plate",
      img: "/images/breakfastImages/breakfast-plate.jpg",
      price: "$5.50",
      intro: "a plate with: two toasts with your choice of ingredients, served with seasonal fruits",
    },
    {
      title: "avacatoast",
      img: "/images/breakfastImages/avacadoBread.jpg",
      price: "$3.00",
      intro:"two toasts with avacado, boiled and fried eggs and shrimp",
    },
    {
      title: "toast",
      img: "/images/breakfastImages/toast.jpg",
      price: "$10.00",
      intro:"two toasts with fried egg, cheddar cheese, mashed avacado, bacon and smoked turkey",
    },
    {
      title: "all on bread",
      img: "/images/breakfastImages/onBread.jpg",
      price: "$5.30",
      intro:"a slice of bread with cheddar cheese, seasonal greens, bacon and sliced boiled egg",
    },
    {
      title: "all in plate",
      img: "/images/breakfastImages/breakfast-plate.jpg",
      price: "$5.50",
      intro: "a plate with: two toasts with your choice of ingredients, served with seasonal fruits",
    },
    {
      title: "avacatoast",
      img: "/images/breakfastImages/avacadoBread.jpg",
      price: "$3.00",
      intro:"two toasts with avacado, boiled and fried eggs and shrimp",
    },
    {
      title: "toast",
      img: "/images/breakfastImages/toast.jpg",
      price: "$10.00",
      intro:"two toasts with fried egg, cheddar cheese, mashed avacado, bacon and smoked turkey",
    },
    {
      title: "all on bread",
      img: "/images/breakfastImages/onBread.jpg",
      price: "$5.30",
      intro:"a slice of bread with cheddar cheese, seasonal greens, bacon and sliced boiled egg",
    },
    

  ];

  return (
    <div>
     
     <div className='flex items-center justify-center mb-10'>
<div className="flex flex-col justify-center items-center shadow-lg rounded-full bg-stone-100 w-48 h-48">
  <img className="justify-center items-center w-20 mb-3 " src="/images/cake.png" alt="cake" />
  <h1 className="font-hand-write text-5xl font-bold ">CAKES</h1>
  <h1 className="font-hand-write text-3xl font-bold ">breakfast</h1>
</div></div>

    <div className="gap-5 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
       <div className="relative group">
       <Card
       className="w-60 transition-opacity duration-700 group-hover:opacity-50 group-hover:shadow-2xl group-hover:scale-105"
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log(`${item.title} pressed`)}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[200px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-medium font-hand-write justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
        <span className="absolute inset-0 flex items-center justify-center text-stone-700 font-hand-write text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex-col">
         <h1 className="text-2xl underline decoration-wavy mb-2">INGREDIENTS</h1>
          <h1>{item.intro}</h1>
          </span>
</div>
      ))}
    </div>
    </div>
  );
}