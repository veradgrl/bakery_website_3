"use client";

import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image"; 
import React from "react";

interface CakesItem {
  title: string;
  img: string;
  price: string;
  intro: string;
}

export default function DrinksPage() {
  const list: CakesItem[] = [
    {
      title: "cinnamon latte",
      img: "/images/drinksImage/cinnamonCoffee.jpg",
      price: "$5.30",
      intro: "a hazelnut cupcake served with thin cookies and hazelnut cream",
    },
    
    {
      title: "latte",
      img: "/images/drinksImage/lattee.jpg",
      price: "$3.00",
      intro: "an oreo cupcake served with oreo crem, chocolate souce and an oreo",
    },
    {
      title: "matcha latte",
      img: "/images/drinksImage/matchaLatte.jpg",
      price: "$10.00",
      intro: "a redvelvet cupcake served with heavy vanilla cream",
    },
    {
      title: "fresh lemonade",
      img: "/images/drinksImage/lemonade.jpg",
      price: "$5.50",
      intro: "a caramel and croquant cupcake served with caramel and vanilla cream and also caramel and croquant souce",
    },
    {
      title: "cinnamon latte",
      img: "/images/drinksImage/cinnamonCoffee.jpg",
      price: "$5.30",
      intro: "a hazelnut cupcake served with thin cookies and hazelnut cream",
    },
    
    {
      title: "latte",
      img: "/images/drinksImage/lattee.jpg",
      price: "$3.00",
      intro: "an oreo cupcake served with oreo crem, chocolate souce and an oreo",
    },
    {
      title: "matcha latte",
      img: "/images/drinksImage/matchaLatte.jpg",
      price: "$10.00",
      intro: "a redvelvet cupcake served with heavy vanilla cream",
    },
    {
      title: "fresh lemonade",
      img: "/images/drinksImage/lemonade.jpg",
      price: "$5.50",
      intro: "a caramel and croquant cupcake served with caramel and vanilla cream and also caramel and croquant souce",
    },

    
  ];

  return (
<div>

<div className='flex items-center justify-center mb-10'>
<div className="flex flex-col justify-center items-center shadow-lg rounded-full bg-stone-100 w-48 h-48">
  <img className="justify-center items-center w-20 mb-3 " src="/images/cake.png" alt="cake" />
  <h1 className="font-hand-write text-5xl font-bold ">CAKES</h1>
  <h1 className="font-hand-write text-3xl font-bold ">drinks</h1>
</div></div>

    <div className="gap-5 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
       <div className="relative group">
       <Card
       className="w-60 transition-opacity duration-700 group-hover:shadow-2xl group-hover:scale-105"
          shadow="sm"
          key={index}
        
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover object-center h-[200px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-medium font-hand-write justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>

       
        
</div>
      ))}
    </div>
    </div>
  );
}