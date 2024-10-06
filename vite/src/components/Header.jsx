import React from 'react'
import "../styles/Header.scss"
import { Images } from '../Images';
import { useEffect } from 'react';
import { useState } from 'react';



function Header() {

  const [currentImage, setCurrentImage] = useState(null);

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * Images.length);
    return Images[randomIndex];
  };

  useEffect(() => {

    setCurrentImage(getRandomImage());

    const intervalId = setInterval(() => {
      setCurrentImage(getRandomImage());
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  


  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Firebase</span>
      <span className="headerTitleLg">Blog</span>
      {
currentImage && (

      <img src={currentImage.img} className="headerImage" alt="" />
)}
      </div>
    </div>
  )
}
export default Header;
