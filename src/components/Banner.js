import React from 'react'

const Banner = ({movie}) => { // Home의 movie props 가져옴
    console.log("movie?", movie);
  
    return (
    <div className='banner'
    style={{backgroundImage: "url("+
        `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.poster_path}`+
    ")",
    }}
>
    <div className='banner-info'>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </div>
    </div>
  )
}

export default Banner;
