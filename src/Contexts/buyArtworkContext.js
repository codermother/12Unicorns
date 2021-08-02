import React, { useState, createContext } from "react";
import Astro1 from "../Photos/Astronauts/astro1.png";
import Astro2 from "../Photos/Astronauts/astro2.png";
import Astro3 from "../Photos/Astronauts/astro3.png";
import Astro4 from "../Photos/Astronauts/astro4.png";
import Astro5 from "../Photos/Astronauts/astro5.png";
import Astro6 from "../Photos/Astronauts/astro6.png";
import Astro7 from "../Photos/Astronauts/astro7.png";
import Astro8 from "../Photos/Astronauts/astro8.png";
import Astro9 from "../Photos/Astronauts/astro9.png";
import Astro10 from "../Photos/Astronauts/astro10.png";

export const BuyArtworkContext = createContext();

export const BuyArtworkProvider = (props) => {
  const [images, setImages] = useState([
    {
      id: "1",
      key: "1",
      img: Astro1,
    },
    {
      id: "2",
      key: "2",
      img: Astro2,
    },
    {
      id: "3",
      key: "3",
      img: Astro3,
    },
    {
      id: "4",
      key: "4",
      img: Astro4,
    },
    {
      id: "5",
      key: "5",
      img: Astro5,
    },
    {
      id: "6",
      key: "6",
      img: Astro6,
    },
    {
      id: "7",
      key: "7",
      img: Astro7,
    },
    {
      id: "8",
      key: "8",
      img: Astro8,
    },
    {
      id: "9",
      key: "9",
      img: Astro9,
    },
    {
      id: "10",
      key: "10",
      img: Astro10,
    },
  ]);

  return (
    <BuyArtworkContext.Provider value={[images, setImages]}>
      {props.children}
    </BuyArtworkContext.Provider>
  );
};
