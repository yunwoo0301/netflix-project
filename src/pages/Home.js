import React from 'react'
import { useEffect } from 'react'
import { movieAction } from '../redux/actions/movieAction'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../components/Banner'
import MovieSlide from '../components/MovieSlide'
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
    const dispatch = useDispatch();
    // movieReducer 통해 영화 리스트 정보 가져오기
    const {popularMovies, topRatedMovies, upComingMovies, loading} = useSelector(state=>state.movie)
    console.log("home", popularMovies); // 인기순 영화 정보 출력
    

    useEffect(() => { // 렌더링 이뤄진 후 호출
        dispatch(movieAction.getMovies());
    }, []);

    // loading이 true면 로딩 스피너 노출 / false일 때 데이터를 보여줌
    if (loading) { 
      return <ClipLoader color="#ffff" loading={loading} size={150} />;
    }
  
    return (
      <div className='home_container'>
        <ClipLoader
          color="#ffff"
          loading={loading}
          size={150}
        />
        {popularMovies.results && <Banner movie={popularMovies.results[0]} />}
      
        <div className='movies'>
          <div className='movie_contents'>
            <h1 className='category'>Popular Movie</h1>
            <MovieSlide movies={popularMovies}/>
          </div>
          <div className='movie_contents'>
            <h1 className='category'>Top rated Movie</h1>
            <MovieSlide movies={topRatedMovies}/>
          </div>
          <div className='movie_contents'>
            <h1 className='category'>Upcoming Movie</h1>
            <MovieSlide movies={upComingMovies}/>
          </div>
        </div>  
      </div>
    )
}

export default Home;
