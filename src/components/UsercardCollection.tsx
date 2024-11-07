"use client";

import Usercard from "./Usercard";
import { callAPI } from "@/config/axios";
import { useEffect, useState } from "react";

interface ICardcollection {}

const UsercardCollection: React.FC<ICardcollection> = () => {
  const [data, setData] = useState<any[]>([]);
  const getData = async () => {
    try {
      const response = await callAPI.get("/user");
      setData(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return data.map((value: any, index: number) => {
    return (
      <div key={index}>
        <Usercard
          key={index}
          name={value.name}
          phonenumber={value.phone}
          imgsrc={value.id}
        />
      </div>
    );
  });
};

export default UsercardCollection;
