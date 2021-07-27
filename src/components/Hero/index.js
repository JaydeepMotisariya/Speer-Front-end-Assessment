
import { Gallery, GalleryImage } from "react-gesture-gallery";
import Button from '../CiaButton'
import { useState} from "react";
import ImageText from "../Text";
import Red from "../RedSection";
import Footer from "../Footer";

import SliderImageOne from './images/sliderImage1.jpg' 
import SliderImageTwo from './images/sliderImage2.jpg' 
import SliderImageThree from './images/sliderImage3.jpg' 


export default function Slider() {
  const [index, setIndex] = useState(0);

  const images = [
    {
      src: SliderImageOne
    },
    {
      src: SliderImageTwo
    },
    {
      src:SliderImageThree
    }
  ];
 
  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      backgroundColor: "#0a0a0a", cursor: 'default'
    }} >
      <Gallery
        index={index}
        onRequestChange={i => {
          setIndex(i);
        }}
      >
        {}
        {images.map(image => (
          <div>
            <ImageText />
            <Button />
            <GalleryImage objectFit="contain" key={image} src={image.src} />
          </div>
        ))}
      </Gallery>
      <Red />
      <Footer />
    </div>
  );
}