import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from './MovieCard';

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

const MovieSlide = ({movies}) => { // Home의 movies props 전달 받음
  console.log("movies", movies);
  
  return (
    <div className='slide_container'>
        <Carousel responsive={responsive}>
          {movies.results.map((item) => (
          <MovieCard item={item}/> 
          ))}
        </Carousel>
    </div>
  )
}

export default MovieSlide;
