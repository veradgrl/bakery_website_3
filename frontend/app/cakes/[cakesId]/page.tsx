"use client";

import React, { useEffect, useState } from "react";
import { Cake } from "@/components/cakesItem";
import axios, { AxiosResponse } from "axios";
import { log } from "console";

export default function Id({
  params,
}: {
  params: { cakesId: number };
}) {
  const [cakeItem, setCakeItem] = useState<Cake | null>(null); // API'den gelen kek bilgisi
  const [loading, setLoading] = useState<boolean>(true); // Veri yüklenme durumu
  const BASE_URL = "http://localhost:3300/cakes"; // API URL'iniz

  useEffect(() => {
    const fetchData = async () => {
      const unwrappedParams = await params; // params'ı çöz
      if (!unwrappedParams?.cakesId) return;
  
      try {
        const response: AxiosResponse<Cake> = await axios.get(
          `${BASE_URL}/${unwrappedParams.cakesId}`
        );
        console.log('API Response:', response.data); // API yanıtını kontrol et
        setCakeItem(response.data); // Veriyi state'e kaydet
        console.log("cakeItem : ");
        console.log(cakeItem)
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [params]);
  

  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (!cakeItem) {
    return <div>No data found.</div>; // Veri yoksa hata mesajı
  }

  console.log("cakeItem state:", cakeItem);


  return (
    
    <div className="grid grid-cols-2 grid-row-4 justify-center items-center mt-10 font-hand-write text-lg">
      <img
        className="w-[500px] object-cover h-[500px] rounded-2xl"
        src="/images/cakesImages/cookieCake.jpg" 
        alt={cakeItem.title}
      />
      <div>
        <h1 className="font-bold text-5xl">{cakeItem.title}</h1>
        <hr className="my-5" />
        <div className="row-span-2">
          <h1>{cakeItem.intro}</h1>
        </div>
        <hr className="my-5" />
        <h1>{cakeItem.price}</h1>
        <p>{cakeItem.ingredients}</p> {/* Ekstra bilgi, örneğin içerik */}
      </div>
    </div>
  );
}
