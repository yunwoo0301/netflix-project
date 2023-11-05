import React from 'react'
import background from "../resources/Homebg.jpg";

const Banner = ({movie}) => { // Home의 movie props 가져옴
    console.log("movie?", movie);
  
    return (
//          <div className='banner'
//     style={{backgroundImage: "url("+
//         `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.poster_path}`+
//     ")",
//     }}
// >
    <div className='banner'>
      <img className='banner-bg'src={background} alt="background"/>
      <div className='banner-info'>
        <h1 className='title'>What movie are you looking for?</h1>
        <p className='sub_title'>Enjoy it on Netflix right now !</p>
      </div>
    </div>
  )
}

export default Banner;
