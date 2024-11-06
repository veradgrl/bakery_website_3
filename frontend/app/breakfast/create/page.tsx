"use client"

import React, { useState } from 'react';
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image"; 

interface CakesItem {
  title: string;
  img: string;
  price: string;
  intro: string;
}

export default function DrinksPage() {
  const list: CakesItem[] = [
    {
      title: "bread",
      img: "/images/createImages/bread.jpg",
      price: "$1.0",
      intro: "",
    },
    {
      title: "croissant",
      img: "/images/createImages/croissant1.jpg",
      price: "$2.0",
      intro: "",
    },
    {
      title: "bagel",
      img: "/images/createImages/bagel.jpg",
      price: "$1.2",
      intro: "",
    },
    {
      title: "boiled sliced egg",
      img: "/images/createImages/boiledEgg.jpg",
      price: "$0.7",
      intro: "",
    },
    {
      title: "fried egg",
      img: "/images/createImages/friedEgg1.jpg",
      price: "$0.7",
      intro: "",
    },
    {
      title: "mashed seasoned avacado",
      img: "/images/createImages/mashedAvacado.jpg",
      price: "$0.7",
      intro: "",
    },
    {
      title: "sliced avacado",
      img: "/images/createImages/slicedAvacado.jpg",
      price: "$0.7",
      intro: "",
    },
    {
      title: "bacon",
      img: "/images/createImages/bacon.jpg",
      price: "$0.7",
      intro: "",
    },
    {
      title: "ham",
      img: "/images/createImages/ham.jpg",
      price: "$0.7",
      intro: "",
    },
  ];

  // Her resim için opacity durumunu tutan bir dizi
  const [opacities, setOpacities] = useState<string[]>(
    Array(list.length).fill('opacity-50')
  );

  // Tıklama olayında opacity'yi değiştiren fonksiyon
  const handleClick = (index: number) => {
    setOpacities((prevOpacities) =>
      prevOpacities.map((opacity, i) =>
        i === index ? (opacity === 'opacity-50' ? 'opacity-100' : 'opacity-50') : opacity
      )
    );
  };

  return (
    <div>

<div className='flex items-center justify-center mb-10'>
<div className="flex flex-col justify-center items-center shadow-lg rounded-full bg-stone-100 w-48 h-48">
  <img className="justify-center items-center w-20 mb-3 " src="/images/cake.png" alt="cake" />
  <h1 className="font-hand-write text-5xl font-bold ">CAKES</h1>
  <h1 className="font-hand-write text-3xl font-bold ">create</h1>
</div></div>

<div className='shadow-lg bg-stone-100 rounded-full'>
<h1 className="font-hand-write text-xl font-bold mb-10  ">creat your breakfast plate by selecting the ingredients</h1>
</div>
      
    <div className="gap-5 grid md:grid-cols-3 grid-cols-1">
      {list.map((item, index) => (
        <div key={index} className="relative group">
          <button
            onClick={() => handleClick(index)}
            className={`${opacities[index]} transition-opacity duration-300`}
          >
            <Card className="w-60 group-hover:shadow-2xl group-hover:scale-105" shadow="sm">
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
          </button>
        </div>
      ))}
    </div>
    </div>
  );
}
