import React, { useState, createContext } from "react";
import Explore1 from "../Photos/Explore1.png";
import ExpertsBetty from "../Photos/ExpertBetty.png";
import Maria from "../Photos/MariaAbramova.png";
import BobSummer from "../Photos/Explore9.png";

export const ExpertsContext = createContext();

export const ExpertsProvider = (props) => {
  const [experts, setExperts] = useState([
    {
      id: 1,
      img: Explore1,
      art: "MODERN ART EXPERT",
      name: "Elizabeth May",
      txt: {
        desc: " Hey i´m Elizabeth! <br /> I am really passionate about Street Art. Some say street art was born in the late 70’s in New York City through graffiti art in public places. Some called it vandalism, some are still calling it vandalism.",
        ls: [
          "SOMEFACTS ABOUT",
          "25 YEARS EXPERIENCE",
          "2 GALLERIES IN NEW YORK",
          "ARTICLE IN FORBS MAGAZINE",
          "27 WORLDWIDE EXHIBITIONS",
        ],
      },
    },
    {
      id: 2,
      img: ExpertsBetty,
      art: "POP ART ART EXPERT",
      name: "Betty Winters",
      txt: {
        desc: " Hey i´m Betty! <br /> I am really passionate about Street Art. Some say street art was born in the late 70’s in New York City through graffiti art in public places. Some called it vandalism, some are still calling it vandalism.",
        ls: [
          "SOMEFACTS ABOUT",
          "25 YEARS EXPERIENCE",
          "2 GALLERIES IN NEW YORK",
          "ARTICLE IN FORBS MAGAZINE",
          "27 WORLDWIDE EXHIBITIONS",
        ],
      },
    },
    {
      id: 3,
      img: Maria,
      art: "FINE ART EXPERT",
      name: "Maria Abramova",
      txt: {
        desc: " Hey i´m Maria! <br /> I am really passionate about Street Art. Some say street art was born in the late 70’s in New York City through graffiti art in public places. Some called it vandalism, some are still calling it vandalism.",
        ls: [
          "SOMEFACTS ABOUT",
          "25 YEARS EXPERIENCE",
          "2 GALLERIES IN NEW YORK",
          "ARTICLE IN FORBS MAGAZINE",
          "27 WORLDWIDE EXHIBITIONS",
        ],
      },
    },
    {
      id: 4,
      img: BobSummer,
      art: "STREET ART EXPERT",
      name: "Bob Summer",
      txt: {
        desc: " Hey i´m Bob! <br /> I am really passionate about Street Art. Some say street art was born in the late 70’s in New York City through graffiti art in public places. Some called it vandalism, some are still calling it vandalism.",
        ls: [
          "SOMEFACTS ABOUT",
          "25 YEARS EXPERIENCE",
          "2 GALLERIES IN NEW YORK",
          "ARTICLE IN FORBS MAGAZINE",
          "27 WORLDWIDE EXHIBITIONS",
        ],
      },
    },
    {
      id: 5,
      img: Maria,
      art: "FINE ART EXPERT",
      name: "Rapli Cool",
      txt: {
        desc: " Hey i´m Maria! <br /> I am really passionate about Street Art. Some say street art was born in the late 70’s in New York City through graffiti art in public places. Some called it vandalism, some are still calling it vandalism.",
        ls: [
          "SOMEFACTS ABOUT",
          "25 YEARS EXPERIENCE",
          "2 GALLERIES IN NEW YORK",
          "ARTICLE IN FORBS MAGAZINE",
          "27 WORLDWIDE EXHIBITIONS",
        ],
      },
    },
    {
      id: 6,
      img: Explore1,
      art: "MODERN ART EXPERT",
      name: "Elizabeth May",
      txt: {
        desc: " Hey i´m Elizabeth! <br /> I am really passionate about Street Art. Some say street art was born in the late 70’s in New York City through graffiti art in public places. Some called it vandalism, some are still calling it vandalism.",
        ls: [
          "SOMEFACTS ABOUT",
          "25 YEARS EXPERIENCE",
          "2 GALLERIES IN NEW YORK",
          "ARTICLE IN FORBS MAGAZINE",
          "27 WORLDWIDE EXHIBITIONS",
        ],
      },
    },
    {
      id: 7,
      img: Maria,
      art: "MIX MEDIA ART ART EXPERT",
      name: "Frauke Sommer",
      txt: {
        desc: " Hey i´m Frauke! <br /> I am really passionate about Street Art. Some say street art was born in the late 70’s in New York City through graffiti art in public places. Some called it vandalism, some are still calling it vandalism.",
        ls: [
          "SOMEFACTS ABOUT",
          "25 YEARS EXPERIENCE",
          "2 GALLERIES IN NEW YORK",
          "ARTICLE IN FORBS MAGAZINE",
          "27 WORLDWIDE EXHIBITIONS",
        ],
      },
    },
    {
      id: 8,
      img: Maria,
      art: "FINE ART EXPERT",
      name: "Maria Abramova",
      txt: {
        desc: " Hey i´m Maria! <br /> I am really passionate about Street Art. Some say street art was born in the late 70’s in New York City through graffiti art in public places. Some called it vandalism, some are still calling it vandalism.",
        ls: [
          "SOMEFACTS ABOUT",
          "25 YEARS EXPERIENCE",
          "2 GALLERIES IN NEW YORK",
          "ARTICLE IN FORBS MAGAZINE",
          "27 WORLDWIDE EXHIBITIONS",
        ],
      },
    },
    {
      id: 9,
      img: BobSummer,
      art: "STREET ART EXPERT",
      name: "Bob Summer",
      txt: {
        desc: " Hey i´m Bob! <br /> I am really passionate about Street Art. Some say street art was born in the late 70’s in New York City through graffiti art in public places. Some called it vandalism, some are still calling it vandalism.",
        ls: [
          "SOMEFACTS ABOUT",
          "25 YEARS EXPERIENCE",
          "2 GALLERIES IN NEW YORK",
          "ARTICLE IN FORBS MAGAZINE",
          "27 WORLDWIDE EXHIBITIONS",
        ],
      },
    },
    {
      id: 10,
      img: Maria,
      art: "FINE ART EXPERT",
      name: "Rapli Cool",
      txt: {
        desc: " Hey i´m Maria! <br /> I am really passionate about Street Art. Some say street art was born in the late 70’s in New York City through graffiti art in public places. Some called it vandalism, some are still calling it vandalism.",
        ls: [
          "SOMEFACTS ABOUT",
          "25 YEARS EXPERIENCE",
          "2 GALLERIES IN NEW YORK",
          "ARTICLE IN FORBS MAGAZINE",
          "27 WORLDWIDE EXHIBITIONS",
        ],
      },
    },
  ]);

  return (
    <ExpertsContext.Provider value={[experts, setExperts]}>
      {props.children}
    </ExpertsContext.Provider>
  );
};
