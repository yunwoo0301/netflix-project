import React from 'react'
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faImdb } from '@fortawesome/free-brands-svg-icons';
import Fade from "react-reveal/Fade";
import { useNavigate } from 'react-router-dom';


const TVCard = ({item}) => { // item props로 받음
    const navigate = useNavigate();
    const { genreTvList } = useSelector((state => state.tv));

    

  return (
    <div className='card_container'>
        <Fade>
        <div className='card_img' 
        style={{backgroundImage: "url("+
                `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/${item.poster_path}`+
            ")",
        }}
        onClick={() => navigate(`/tvseries/${item.id}`)}>

        <div className='overlay'>
            <h1 className='card_title'>{item.name}</h1>
            <div>
                {item.genre_ids.map((id) => (
                <Badge bg="danger"  className='card_genre'>
                    {genreTvList.find((item) => item.id === id).name}
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
                    </ul>
                </div> 
            </div> 
        </div>
        </Fade>
    </div>
  )
};

export default TVCard;