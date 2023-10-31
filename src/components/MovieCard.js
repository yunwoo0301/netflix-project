import React from 'react'
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faImdb } from '@fortawesome/free-brands-svg-icons';
import Fade from "react-reveal/Fade";

const MovieCard = ({item}) => { // item props로 받음

    const { genreList } = useSelector((state=> state.movie));
  return (
    <div className='movie_card'>
        <Fade>
        <div className='card_img' 
        style={{backgroundImage: "url("+
                `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/${item.poster_path}`+
            ")",
        }}
        >
            <div className='overlay'> 
                <h1 className='card_title'>{item.title}</h1>
                <div>
                    {item.genre_ids.map((id)=>(
                    <Badge bg="danger" className='card_genre'>
                        {genreList.find((item) => item.id === id).name} {/* 배열에서 찾아주는 find 함수 */}
                    </Badge> 
                    ))}
                </div>

                <div className='card_detail'>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faImdb} className='item_icon'/>
                            <span>{item.vote_average}</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faUserGroup} className='user_icon' />
                            <span className="imb-score">{item.popularity}</span> 
                        </li>
                        {/* <li>
                            <span>{item.adult? "청불" : "Under 18"}</span>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
        </Fade>
    </div>
  )
};

export default MovieCard;