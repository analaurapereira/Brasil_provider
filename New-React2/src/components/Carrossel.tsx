import { useState, useEffect } from "react";
import Carousel from "react-spring-3d-carousel";
import { StyleProperties, Numbers, Images } from '../styles/carrossel';
import { config } from "react-spring";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useSpring, animated } from 'react-spring';
import img1 from '../assets/img/m1.jpg';
import img2 from '../assets/img/m2.jpg';
import img3 from '../assets/img/m3.jpg';
import img4 from '../assets/img/m4.jpg';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const images = [img1, img2, img3, img4];
const links = ['/contato', '/portifolio', '/serviços', '/sobrenos'];


export const Carrossel = () => {

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [autoAdvanceTimer, setAutoAdvanceTimer] = useState<number | null>(null);

  const imageStyles = useSpring({
    width: '500px',
    height: '300px',
    borderRadius: '20px',
  });

  const iconStyles = {
    fontSize: "20px",
    color: 'whitesmoke',
  };

  const handlePrevClick = () => {
    const newIndex = (activeSlideIndex - 1 + images.length) % images.length;
    setActiveSlideIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = (activeSlideIndex + 1) % images.length;
    setActiveSlideIndex(newIndex);
  };
  
  useEffect(() => {
  const handleAutoAdvance = () => {
    const proximoSlide = (activeSlideIndex + 1) % images.length;
    setActiveSlideIndex(proximoSlide);
  };

  const autoAdvanceTimer = setInterval(handleAutoAdvance, 5000);

  setAutoAdvanceTimer(autoAdvanceTimer);

  return () => {
    clearInterval(autoAdvanceTimer);
  };
}, [activeSlideIndex]);

  return (
    <StyleProperties>
      <Numbers>
        <button onClick={handlePrevClick} style={{ background: 'transparent', border: 'none' }}>
          <AiFillCaretLeft style={iconStyles} />
        </button>

        {`${activeSlideIndex + 1} / ${images.length}`}

        <button onClick={handleNextClick} style={{ background: 'transparent', border: 'none' }}>
          <AiFillCaretRight style={iconStyles} />
        </button>
      </Numbers>

      <Images>
        <animated.div style={imageStyles}>
          <Carousel
            slides={images.map((image, index) => ({
              key: index.toString(),
              content: (
                <Link to={links[index]}>
                  <img src={image} alt={index.toString()} style={{ borderRadius: '20px', zIndex: '-2', maxHeight:'300px' }} />
                </Link>
              ),
              onClick: () => setActiveSlideIndex(index),
            }))}
            goToSlide={activeSlideIndex}
            offsetRadius={10}
            showNavigation={false}
            animationConfig={config.slow}
          />
        </animated.div>
      </Images>

    </StyleProperties>
  );
};