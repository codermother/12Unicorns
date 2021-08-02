import React, { useState, createContext } from "react";

export const GalleryContext = createContext();

export const GalleryProvider = (props) => {
  const [activeGallery, setActiveGallery] = useState(false);

  return (
    <GalleryContext.Provider value={[activeGallery, setActiveGallery]}>
      {props.children}
    </GalleryContext.Provider>
  );
};
