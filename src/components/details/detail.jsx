import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import db from '../../firebase';
import { doc, getDoc } from "firebase/firestore";
import './detail.scss';

const Detail = () => {
    const { id } = useParams();
    const [detailData, setDetailData] = useState({});

    useEffect(() => {
        const docRef = doc(db, "movies", id);
        getDoc(docRef)
            .then(doc => {
                if (doc.exists()) {
                    setDetailData(doc.data());
                } else {
                    console.log('nothing here')
                }
            })
            .catch(error => {
                console.log(error)
            })

    }, [id])

    return (
        <div id="detail">
            <div className="background" style={{ backgroundImage: `url(${detailData.backgroundImg})` }}></div>
            <div className="title">
                <img src={detailData.titleImg} alt="" />
            </div>
            <div className="controls">
                <button className="btn btn-play">
                    <img className='icon' src="/images/play-icon-black.png" alt="" />
                    <span className="text">PLAY</span>
                </button>
                <button className="btn btn-trailer">
                    <img className='icon' src="/images/play-icon-white.png" alt="" />
                    <span className="text">TRAILER</span>
                </button>
                <button className="btn-circle btn-add">
                    <span className='icon'>+</span>
                </button>
                <button className="btn-circle  btn-group">
                    <img className='icon' src="/images/group-icon.png" alt="" />
                </button>
            </div>
            <div className="subtitle">
                {detailData.subTitle}
            </div>
            <div className="description">
                {detailData.description}
            </div>
        </div>

    );
};

export default Detail;