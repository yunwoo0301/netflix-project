import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TVCard from './TVCard';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };

  const TvSlide = ({tvseries}) => { // Home의 movies props 전달 받음
    console.log("tvseries", tvseries);
    
    return (
      <div className='slide_container'>
          <Carousel responsive={responsive}>
            {tvseries.results.map((item) => (
            <TVCard item={item}/> 
            ))}
          </Carousel>
      </div>
    )
  }
  
  export default TvSlide;
