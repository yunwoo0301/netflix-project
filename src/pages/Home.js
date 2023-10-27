import React from 'react'
import { useEffect } from 'react'
import { movieAction } from '../redux/actions/movieAction'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../components/Banner'
import MovieSlide from '../components/MovieSlide'

const Home = () => {
    const dispatch = useDispatch();
    // movieReducer 통해 영화 리스트 정보 가져오기
    const {popularMovies, topRatedMovies, upComingMovies} = useSelector(state=>state.movie)
    console.log("home", popularMovies); // 인기순 영화 정보 출력
    

    useEffect(() => { // 렌더링 이뤄진 후 호출
        dispatch(movieAction.getMovies());
    }, []);

  return (
    <div>
      {popularMovies.results && <Banner movie={popularMovies.results[0]} />}
    
      <h1>Popular Movie</h1>
      <MovieSlide movies={popularMovies}/>
      <h1>Top rated Movie</h1>
      <MovieSlide movies={topRatedMovies}/>
      <h1>Upcoming Movie</h1>
      <MovieSlide movies={upComingMovies}/>
    </div>
  )
}

export default Home;
