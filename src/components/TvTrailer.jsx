import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactModal from 'react-modal';
import YouTube from 'react-youtube';
import api from '../redux/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';

const API_KEY = process.env.React_APP_API_KEY;

const TvTrailer = ({item}) => {
    const [modalOpen, setModalOpen] = useState(true);  // 영화카드 클릭 시 모달창 떠야 하므로 True
    const {id} = useParams();
    console.log("티비 시리즈 예고편 ID", id);
    const [video, setVideo] = useState([]);
    const navigate = useNavigate();


    
    const getTvTrailer = async() => {
        let url = `/tv/${id}/videos?api_key=${API_KEY}&language=en-US`
        let response = await api.get(url)
        let data = response.data;
        setVideo(data)
        console.log("티비 예고편 데이터는?",data)
    }


    
      useEffect(()=>{
        getTvTrailer();
    },[]);

    const closeModal = () => {
        setModalOpen(false);
        navigate('/');
    }


    return (
        <div>
            <ReactModal
                isOpen = {modalOpen}
                style = {{ content: { 
                    backgroundColor: "#000",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', 
                } 
            }}>
                <FontAwesomeIcon icon={faSquareXmark} className='squar_xmark' style={{ color: "#fe4536" }}
                onClick={() => closeModal()} />

                <div className="trailer" >
                    <YouTube
                        videoId={video.results && video.results.length > 0 ? video.results[0].key : null}
                        autoPlay
                        opts={{
                            width:"1800",
                            height: "800",
                            playerVars: {
                            autoplay: 1,         //자동재생 O
                            rel: 0,             //관련 동영상 표시 X
                            modestbranding: 1, // 컨트롤 바에 youtube 로고 표시 X
                            },
                        }}
                    />
                </div>
            </ReactModal>
        </div>
    )
}

export default TvTrailer;
