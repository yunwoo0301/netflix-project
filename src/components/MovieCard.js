import React from 'react'
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const MovieCard = ({item}) => { // item props로 받음

    const { genreList } = useSelector((state=> state.movie));
  return (
    <div className='card_img' 
    style={{backgroundImage: "url("+
            `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/${item.poster_path}`+
        ")",
    }}
    >
        <div className='overlay'> 
            <h1 className='movie_title'>{item.title}</h1>
            <div>
                {item.genre_ids.map((id)=>(
                <Badge bg="danger" className='movie_genre'>
                    {genreList.find((item) => item.id === id).name} {/* 배열에서 찾아주는 find 함수 */}
                </Badge> 
                ))}
            </div>

            <div>
                <span>{item.vote_average}</span>
                <span>{item.adult?"청불" : "Under 18"}</span>
            </div>
        </div>
    </div>
  )
};

export default MovieCard;
