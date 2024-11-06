"use client";

import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import React, { useState } from "react";

interface DrinksItem {
  title: string;
  img: string;
  price: string;
}

export default function DrinksPage() {

  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<DrinksItem[]>([]);


  const list: DrinksItem[] = [
    {
      title: "cinnamon latte",
      img: "/images/drinksImage/cinnamonCoffee.jpg",
      price: "$4.20",
    },

    {
      title: "latte",
      img: "/images/drinksImage/lattee.jpg",
      price: "$4.20",
    },
    {
      title: "matcha latte",
      img: "/images/drinksImage/matchaLatte.jpg",
      price: "$4.20",
    },
    {
      title: "cappucino",
      img: "/images/drinksImage/cappucino.jpg",
      price: "$4.20",
    },
    {
      title: "fresh lemonade",
      img: "/images/drinksImage/lemonade.jpg",
      price: "$4.20",
    },

    {
      title: "strawberry soda",
      img: "/images/drinksImage/strawberrySoda.jpg",
      price: "$4.20",
    },
    {
      title: "kiwi soda",
      img: "/images/drinksImage/kiwiSoda.jpg",
      price: "$4.20",
    },
    {
      title: "herbal tea",
      img: "/images/drinksImage/herbalTea.jpg",
      price: "$4.20",
    },


  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    if (value === "") {
      setFiltered(list);
    } else {
      const searchFilter = list.filter((item) =>
        item.title.toLowerCase().includes(value)
      ).slice(0, 3);
      setFiltered(searchFilter);
    }
  };


  return (
    <div>

      <div className='flex items-center justify-center mb-5'>
        <div className="flex flex-col justify-center items-center shadow-lg rounded-full bg-stone-100 w-48 h-48">
          <img className="justify-center items-center w-20 mb-3 " src="/images/cake.png" alt="cake" />
          <h1 className="font-hand-write text-5xl font-bold ">CAKES</h1>
          <h1 className="font-hand-write text-3xl font-bold ">drinks</h1>
        </div></div>


      <div className="mb-5">
        <input
          type="text"
          placeholder="Search"
          onChange={handleSearch}
          className="rounded-full focus:outline-none px-4 py-2 shadow-lg font-hand-write text-xl"
          value={search}
        />
      </div>
      {filtered.length > 0 ? (
        <div className="gap-5 grid md:grid-cols-4 grid-cols-1 mt-5">
          {filtered.map((item, index) => (
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
            </div>
          ))}
        </div>
      ) : (
        <div className="gap-5 grid md:grid-cols-4 grid-cols-1 mt-5">
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
}