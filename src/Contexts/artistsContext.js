import React, { useState, createContext } from "react";
import Federico from "../Photos/Artists/Federico/Federico.jpg";
import FedericoArtists from "../Photos/Artists/Federico/Federico-Artist.jpg";
import FedericoArt1 from "../Photos/Artists/Federico/FedericoArtwork1.jpg";
import Artists from "../Photos/Artists/Artists.png";

export const ArtistsContext = createContext();

export const ArtistsProvider = (props) => {
  const [artists, setArtists] = useState([
    {
      id: 1,
      name: "Federico Castelluccio",
      title: "UNICORN NO°1",
      img: Federico,
      artistImg: FedericoArtists,
      art: [
        {
          id: 1,
          name: "Myself as Luke",
          date: "2011",
          feature: "Oil on canvas",
          size: "42″ x 54″​",
          txt: "“Myself as Luke” has a unique and elegant artistic language that finds its roots in the pages of art history and comes alive through the warm and plastic images that reveal  Federico's innate knowledge of the painting techniques of the Old Masters.",
          price: "3.540,00 € / 11 ETH",
        },
      ],
      txtHome:
        "INTERNATIONALLY RENOWED REALIST PAINTER, ART COLLECTOR AND CONNOISSEUR OF OLD MASTER, BAROQUE PAINTING, BASED IN NEW YORK.",
      expertCommentHome:
        "Mr. Castelluccio's work, even when humorous, is very serious. He obviously approaches form, technique, composition, and attention to detail with great sobriety, and his work suggests a calm and contemplative method.",
      expertCommentArtists:
        "Federico prepares his canvases meticulously and hones their surfaces with outmost care and dedication so that they can then re- ceive the richness of color arranged precisely and obtained from spiration stems from famous artworks that he paints with unparalle- complex, sophisticated palettes full of warm hues.",
      shortParag:
        "Give respect to every single discipline that you are working on, if you do that, and if you don’t do it for any ulterior motive, people will notice that, and they will respect you for that. The passion comes through.",
    },
    {
      id: 2,
      name: "Federico Castelluccio",
      title: "UNICORN NO°2",
      img: Artists,
      artistImg: FedericoArtists,
      art: {
        art1: {
          name: "Myself as Luke",
          date: "2011",
          feature: "Oil on canvas",
          size: "42″ x 54″​",
          txt: "“Myself as Luke” has a unique and elegant artistic language that finds its roots in the pages of art history and comes alive through the warm and plastic images that reveal  Federico's innate knowledge of the painting techniques of the Old Masters.",
          price: "3.540,00 € / 11 ETH",
        },
      },
      txtHome:
        "INTERNATIONALLY RENOWED REALIST PAINTER, ART COLLECTOR AND CONNOISSEUR OF OLD MASTER, BAROQUE PAINTING, BASED IN NEW YORK.",
      expertCommentHome:
        "Mr. Castelluccio's work, even when humorous, is very serious. He obviously approaches form, technique, composition, and attention to detail with great sobriety, and his work suggests a calm and contemplative method.",
      expertCommentArtists:
        "Federico prepares his canvases meticulously and hones their surfaces with outmost care and dedication so that they can then re- ceive the richness of color arranged precisely and obtained from spiration stems from famous artworks that he paints with unparalle- complex, sophisticated palettes full of warm hues.",
      shortParag:
        "Give respect to every single discipline that you are working on, if you do that, and if you don’t do it for any ulterior motive, people will notice that, and they will respect you for that. The passion comes through.",
    },
    {
      id: 3,
      name: "Federico Castelluccio",
      title: "UNICORN NO°3",
      img: Federico,
      artistImg: FedericoArtists,
      art: {
        Art1: {
          name: "Myself as Luke",
          date: "2011",
          feature: "Oil on canvas",
          size: "42″ x 54″​",
          txt: "“Myself as Luke” has a unique and elegant artistic language that finds its roots in the pages of art history and comes alive through the warm and plastic images that reveal  Federico's innate knowledge of the painting techniques of the Old Masters.",
          price: "3.540,00 € / 11 ETH",
        },
      },
      txtHome:
        "INTERNATIONALLY RENOWED REALIST PAINTER, ART COLLECTOR AND CONNOISSEUR OF OLD MASTER, BAROQUE PAINTING, BASED IN NEW YORK.",
      expertCommentHome:
        "Mr. Castelluccio's work, even when humorous, is very serious. He obviously approaches form, technique, composition, and attention to detail with great sobriety, and his work suggests a calm and contemplative method.",
      expertCommentArtists:
        "Federico prepares his canvases meticulously and hones their surfaces with outmost care and dedication so that they can then re- ceive the richness of color arranged precisely and obtained from spiration stems from famous artworks that he paints with unparalle- complex, sophisticated palettes full of warm hues.",
      shortParag:
        "Give respect to every single discipline that you are working on, if you do that, and if you don’t do it for any ulterior motive, people will notice that, and they will respect you for that. The passion comes through.",
    },
    {
      id: 4,
      name: "Federico Castelluccio",
      title: "UNICORN NO°2",
      img: Artists,
      artistImg: FedericoArtists,
      art: {
        art1: {
          name: "Myself as Luke",
          date: "2011",
          feature: "Oil on canvas",
          size: "42″ x 54″​",
          txt: "“Myself as Luke” has a unique and elegant artistic language that finds its roots in the pages of art history and comes alive through the warm and plastic images that reveal  Federico's innate knowledge of the painting techniques of the Old Masters.",
          price: "3.540,00 € / 11 ETH",
        },
      },
      txtHome:
        "INTERNATIONALLY RENOWED REALIST PAINTER, ART COLLECTOR AND CONNOISSEUR OF OLD MASTER, BAROQUE PAINTING, BASED IN NEW YORK.",
      expertCommentHome:
        "Mr. Castelluccio's work, even when humorous, is very serious. He obviously approaches form, technique, composition, and attention to detail with great sobriety, and his work suggests a calm and contemplative method.",
      expertCommentArtists:
        "Federico prepares his canvases meticulously and hones their surfaces with outmost care and dedication so that they can then re- ceive the richness of color arranged precisely and obtained from spiration stems from famous artworks that he paints with unparalle- complex, sophisticated palettes full of warm hues.",
      shortParag:
        "Give respect to every single discipline that you are working on, if you do that, and if you don’t do it for any ulterior motive, people will notice that, and they will respect you for that. The passion comes through.",
    },
    {
      id: 5,
      name: "Federico Castelluccio",
      title: "UNICORN NO°1",
      img: Federico,
      artistImg: FedericoArtists,
      art: {
        art1: {
          name: "Myself as Luke",
          date: "2011",
          feature: "Oil on canvas",
          size: "42″ x 54″​",
          txt: "“Myself as Luke” has a unique and elegant artistic language that finds its roots in the pages of art history and comes alive through the warm and plastic images that reveal  Federico's innate knowledge of the painting techniques of the Old Masters.",
          price: "3.540,00 € / 11 ETH",
        },
      },
      txtHome:
        "INTERNATIONALLY RENOWED REALIST PAINTER, ART COLLECTOR AND CONNOISSEUR OF OLD MASTER, BAROQUE PAINTING, BASED IN NEW YORK.",
      expertCommentHome:
        "Mr. Castelluccio's work, even when humorous, is very serious. He obviously approaches form, technique, composition, and attention to detail with great sobriety, and his work suggests a calm and contemplative method.",
      expertCommentArtists:
        "Federico prepares his canvases meticulously and hones their surfaces with outmost care and dedication so that they can then re- ceive the richness of color arranged precisely and obtained from spiration stems from famous artworks that he paints with unparalle- complex, sophisticated palettes full of warm hues.",
      shortParag:
        "Give respect to every single discipline that you are working on, if you do that, and if you don’t do it for any ulterior motive, people will notice that, and they will respect you for that. The passion comes through.",
    },
    {
      id: 6,
      name: "Federico Castelluccio",
      title: "UNICORN NO°2",
      img: Artists,
      artistImg: FedericoArtists,
      art: {
        art1: {
          name: "Myself as Luke",
          date: "2011",
          feature: "Oil on canvas",
          size: "42″ x 54″​",
          txt: "“Myself as Luke” has a unique and elegant artistic language that finds its roots in the pages of art history and comes alive through the warm and plastic images that reveal  Federico's innate knowledge of the painting techniques of the Old Masters.",
          price: "3.540,00 € / 11 ETH",
        },
      },
      txtHome:
        "INTERNATIONALLY RENOWED REALIST PAINTER, ART COLLECTOR AND CONNOISSEUR OF OLD MASTER, BAROQUE PAINTING, BASED IN NEW YORK.",
      expertCommentHome:
        "Mr. Castelluccio's work, even when humorous, is very serious. He obviously approaches form, technique, composition, and attention to detail with great sobriety, and his work suggests a calm and contemplative method.",
      expertCommentArtists:
        "Federico prepares his canvases meticulously and hones their surfaces with outmost care and dedication so that they can then re- ceive the richness of color arranged precisely and obtained from spiration stems from famous artworks that he paints with unparalle- complex, sophisticated palettes full of warm hues.",
      shortParag:
        "Give respect to every single discipline that you are working on, if you do that, and if you don’t do it for any ulterior motive, people will notice that, and they will respect you for that. The passion comes through.",
    },
    {
      id: 7,
      name: "Federico Castelluccio",
      title: "UNICORN NO°3",
      img: Federico,
      artistImg: FedericoArtists,
      art: {
        Art1: {
          name: "Myself as Luke",
          date: "2011",
          feature: "Oil on canvas",
          size: "42″ x 54″​",
          txt: "“Myself as Luke” has a unique and elegant artistic language that finds its roots in the pages of art history and comes alive through the warm and plastic images that reveal  Federico's innate knowledge of the painting techniques of the Old Masters.",
          price: "3.540,00 € / 11 ETH",
        },
      },
      txtHome:
        "INTERNATIONALLY RENOWED REALIST PAINTER, ART COLLECTOR AND CONNOISSEUR OF OLD MASTER, BAROQUE PAINTING, BASED IN NEW YORK.",
      expertCommentHome:
        "Mr. Castelluccio's work, even when humorous, is very serious. He obviously approaches form, technique, composition, and attention to detail with great sobriety, and his work suggests a calm and contemplative method.",
      expertCommentArtists:
        "Federico prepares his canvases meticulously and hones their surfaces with outmost care and dedication so that they can then re- ceive the richness of color arranged precisely and obtained from spiration stems from famous artworks that he paints with unparalle- complex, sophisticated palettes full of warm hues.",
      shortParag:
        "Give respect to every single discipline that you are working on, if you do that, and if you don’t do it for any ulterior motive, people will notice that, and they will respect you for that. The passion comes through.",
    },
    {
      id: 8,
      name: "Federico Castelluccio",
      title: "UNICORN NO°2",
      img: Artists,
      artistImg: FedericoArtists,
      art: {
        art1: {
          name: "Myself as Luke",
          date: "2011",
          feature: "Oil on canvas",
          size: "42″ x 54″​",
          txt: "“Myself as Luke” has a unique and elegant artistic language that finds its roots in the pages of art history and comes alive through the warm and plastic images that reveal  Federico's innate knowledge of the painting techniques of the Old Masters.",
          price: "3.540,00 € / 11 ETH",
        },
      },
      txtHome:
        "INTERNATIONALLY RENOWED REALIST PAINTER, ART COLLECTOR AND CONNOISSEUR OF OLD MASTER, BAROQUE PAINTING, BASED IN NEW YORK.",
      expertCommentHome:
        "Mr. Castelluccio's work, even when humorous, is very serious. He obviously approaches form, technique, composition, and attention to detail with great sobriety, and his work suggests a calm and contemplative method.",
      expertCommentArtists:
        "Federico prepares his canvases meticulously and hones their surfaces with outmost care and dedication so that they can then re- ceive the richness of color arranged precisely and obtained from spiration stems from famous artworks that he paints with unparalle- complex, sophisticated palettes full of warm hues.",
      shortParag:
        "Give respect to every single discipline that you are working on, if you do that, and if you don’t do it for any ulterior motive, people will notice that, and they will respect you for that. The passion comes through.",
    },
    {
      id: 9,
      name: "Federico Castelluccio",
      title: "UNICORN NO°1",
      img: Federico,
      artistImg: FedericoArtists,
      art: {
        art1: {
          name: "Myself as Luke",
          date: "2011",
          feature: "Oil on canvas",
          size: "42″ x 54″​",
          txt: "“Myself as Luke” has a unique and elegant artistic language that finds its roots in the pages of art history and comes alive through the warm and plastic images that reveal  Federico's innate knowledge of the painting techniques of the Old Masters.",
          price: "3.540,00 € / 11 ETH",
        },
      },
      txtHome:
        "INTERNATIONALLY RENOWED REALIST PAINTER, ART COLLECTOR AND CONNOISSEUR OF OLD MASTER, BAROQUE PAINTING, BASED IN NEW YORK.",
      expertCommentHome:
        "Mr. Castelluccio's work, even when humorous, is very serious. He obviously approaches form, technique, composition, and attention to detail with great sobriety, and his work suggests a calm and contemplative method.",
      expertCommentArtists:
        "Federico prepares his canvases meticulously and hones their surfaces with outmost care and dedication so that they can then re- ceive the richness of color arranged precisely and obtained from spiration stems from famous artworks that he paints with unparalle- complex, sophisticated palettes full of warm hues.",
      shortParag:
        "Give respect to every single discipline that you are working on, if you do that, and if you don’t do it for any ulterior motive, people will notice that, and they will respect you for that. The passion comes through.",
    },
    {
      id: 10,
      name: "Federico Castelluccio",
      title: "UNICORN NO°2",
      img: Artists,
      artistImg: FedericoArtists,
      art: {
        art1: {
          name: "Myself as Luke",
          date: "2011",
          feature: "Oil on canvas",
          size: "42″ x 54″​",
          txt: "“Myself as Luke” has a unique and elegant artistic language that finds its roots in the pages of art history and comes alive through the warm and plastic images that reveal  Federico's innate knowledge of the painting techniques of the Old Masters.",
          price: "3.540,00 € / 11 ETH",
        },
      },
      txtHome:
        "INTERNATIONALLY RENOWED REALIST PAINTER, ART COLLECTOR AND CONNOISSEUR OF OLD MASTER, BAROQUE PAINTING, BASED IN NEW YORK.",
      expertCommentHome:
        "Mr. Castelluccio's work, even when humorous, is very serious. He obviously approaches form, technique, composition, and attention to detail with great sobriety, and his work suggests a calm and contemplative method.",
      expertCommentArtists:
        "Federico prepares his canvases meticulously and hones their surfaces with outmost care and dedication so that they can then re- ceive the richness of color arranged precisely and obtained from spiration stems from famous artworks that he paints with unparalle- complex, sophisticated palettes full of warm hues.",
      shortParag:
        "Give respect to every single discipline that you are working on, if you do that, and if you don’t do it for any ulterior motive, people will notice that, and they will respect you for that. The passion comes through.",
    },
    {
      id: 11,
      name: "Federico Castelluccio",
      title: "UNICORN NO°3",
      img: Federico,
      artistImg: FedericoArtists,
      art: {
        Art1: {
          name: "Myself as Luke",
          date: "2011",
          feature: "Oil on canvas",
          size: "42″ x 54″​",
          txt: "“Myself as Luke” has a unique and elegant artistic language that finds its roots in the pages of art history and comes alive through the warm and plastic images that reveal  Federico's innate knowledge of the painting techniques of the Old Masters.",
          price: "3.540,00 € / 11 ETH",
        },
      },
      txtHome:
        "INTERNATIONALLY RENOWED REALIST PAINTER, ART COLLECTOR AND CONNOISSEUR OF OLD MASTER, BAROQUE PAINTING, BASED IN NEW YORK.",
      expertCommentHome:
        "Mr. Castelluccio's work, even when humorous, is very serious. He obviously approaches form, technique, composition, and attention to detail with great sobriety, and his work suggests a calm and contemplative method.",
      expertCommentArtists:
        "Federico prepares his canvases meticulously and hones their surfaces with outmost care and dedication so that they can then re- ceive the richness of color arranged precisely and obtained from spiration stems from famous artworks that he paints with unparalle- complex, sophisticated palettes full of warm hues.",
      shortParag:
        "Give respect to every single discipline that you are working on, if you do that, and if you don’t do it for any ulterior motive, people will notice that, and they will respect you for that. The passion comes through.",
    },
    {
      id: 12,
      name: "Federico Castelluccio",
      title: "UNICORN NO°2",
      img: Artists,
      artistImg: FedericoArtists,
      art: {
        art1: {
          name: "Myself as Luke",
          date: "2011",
          feature: "Oil on canvas",
          size: "42″ x 54″​",
          txt: "“Myself as Luke” has a unique and elegant artistic language that finds its roots in the pages of art history and comes alive through the warm and plastic images that reveal  Federico's innate knowledge of the painting techniques of the Old Masters.",
          price: "3.540,00 € / 11 ETH",
        },
      },
      txtHome:
        "INTERNATIONALLY RENOWED REALIST PAINTER, ART COLLECTOR AND CONNOISSEUR OF OLD MASTER, BAROQUE PAINTING, BASED IN NEW YORK.",
      expertCommentHome:
        "Mr. Castelluccio's work, even when humorous, is very serious. He obviously approaches form, technique, composition, and attention to detail with great sobriety, and his work suggests a calm and contemplative method.",
      expertCommentArtists:
        "Federico prepares his canvases meticulously and hones their surfaces with outmost care and dedication so that they can then re- ceive the richness of color arranged precisely and obtained from spiration stems from famous artworks that he paints with unparalle- complex, sophisticated palettes full of warm hues.",
      shortParag:
        "Give respect to every single discipline that you are working on, if you do that, and if you don’t do it for any ulterior motive, people will notice that, and they will respect you for that. The passion comes through.",
    },
  ]);

  return (
    <ArtistsContext.Provider value={[artists, setArtists]}>
      {props.children}
    </ArtistsContext.Provider>
  );
};
