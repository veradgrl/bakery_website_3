"use client";

import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from 'axios';


export default function CakesPage() {

  const [search, setSearch] = useState<string>("");
  const [filtered, setFiltered] = useState<Cake[]>([]);

  interface Cake {
    id: number;
    category: string;
    title: string;
    price: number;
    intro: string;
    ingredients: string;
  }

  const [data, setData] = useState<Cake[]>([]);
  const BASE_URL = 'http://localhost:3300/cakes';

   // apiden cakes verilerini çekme
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<Cake[]> = await axios.get(BASE_URL); // API çağrısı -> response artık BASE_URL'den geln verileri tutuyor
        console.log("Fetched data:", response.data);
        setData(response.data); // en yukarıda tanımlanan data artık response içinden gelen datayı tutuyor 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // search bar
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    if (value === "") {
      setFiltered(data);
    } else {
      const searchFilter = data.filter((item) =>
        item.title.toLowerCase().includes(value)
      ).slice(0, 3);
      setFiltered(searchFilter);
    }
  };

  return (
    <div>

      {/* cakes amblemi ve header */}
      <div className='flex items-center justify-center mb-5'>
        <div className="flex flex-col justify-center items-center shadow-lg rounded-full bg-stone-100 w-48 h-48">
          <img className="justify-center items-center w-20 mb-3 " src="/images/cake.png" alt="cake" />
          <h1 className="font-hand-write text-5xl font-bold ">CAKES</h1>
          <h1 className="font-hand-write text-3xl font-bold ">cakes</h1>
        </div></div>

      {/* search bar */}
      <div className="mb-5">
        <input
          type="text"
          placeholder="Search"
          onChange={handleSearch}
          className="rounded-full focus:outline-none px-4 py-2 shadow-lg font-hand-write text-xl"
          value={search}
        />

        {filtered.length > 0 ? (
          <div className="gap-5 grid md:grid-cols-4 grid-cols-1 mt-5">
            {filtered.map((cake) => (
              <div className="relative group">
                <a href={`cakes/${cake.id}`}>
                  <Card
                    className="w-60 transition-opacity duration-700 group-hover:opacity-50 group-hover:shadow-2xl group-hover:scale-105"
                    shadow="sm"
                    key={cake.id}
                    isPressable
                    onPress={() => console.log(`${cake.title} pressed`)}
                  >
                    <CardBody className="overflow-visible p-0">
                      <Image
                        shadow="sm"
                        radius="lg"
                        width="100%"
                        alt={cake.title}
                        className="w-full object-cover h-[200px]"
                        src={'/images/cakesImages/cookieCake.jpg'}
                      />
                    </CardBody>
                    <CardFooter className="text-medium font-hand-write justify-between">
                      <b>{cake.title}</b>
                      <p className="text-default-500">{cake.price} $</p>
                    </CardFooter>
                  </Card>
                  <span className="absolute inset-0 flex items-center justify-center text-stone-700 font-hand-write text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex-col">
                    <h1 className="text-2xl underline decoration-wavy mb-2">INGREDIENTS</h1>
                    <h1>{cake.ingredients}</h1>
                  </span></a>
              </div>
            ))}
          </div>
        ) : (
          <div className="gap-5 grid md:grid-cols-4 grid-cols-1 mt-5">
            {/* ******************************************* */}
            {data.map((cake) => (
              <div key={cake.id} className="relative group">
                <a href={`cakes/${cake.id}`}>
                  <Card
                    className="w-60 transition-opacity duration-700 group-hover:opacity-50 group-hover:shadow-2xl group-hover:scale-105"
                    shadow="sm"
                    isPressable
                    onPress={() => console.log(`${cake.title} pressed`)}
                  >
                    <CardBody className="overflow-visible p-0">
                      <Image
                        shadow="sm"
                        radius="lg"
                        width="100%"
                        alt={cake.title}
                        className="w-full object-cover h-[200px]"
                        src={'/images/cakesImages/cookieCake.jpg'}
                      />
                    </CardBody>
                    <CardFooter className="text-medium font-hand-write justify-between">
                      <b>{cake.title}</b>
                      <p className="text-default-500">{cake.price} $</p>
                    </CardFooter>
                  </Card>
                  <span className="absolute inset-0 flex items-center justify-center text-stone-700 font-hand-write text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex-col">
                    <h1 className="text-2xl underline decoration-wavy mb-2">INGREDIENTS</h1>
                    <h1>{cake.ingredients}</h1>
                  </span></a>
              </div>
            ))}
          </div>
        )}
      </div>



    </div>
  );
}