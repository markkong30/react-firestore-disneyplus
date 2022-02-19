import React from 'react';
import { useSelector } from 'react-redux';
import { selectRecommend } from '../../features/movieSlice';
import { Link } from 'react-router-dom';
import "./recommend.scss";

const Recommend = () => {
    const movies = useSelector(selectRecommend);
    console.log(movies);



    return (
        <div id="recommend">
            <h4>Recommended for You</h4>
            <div className="movies-items">
                {movies &&
                    movies.map((movie, key) => {
                        return (
                            <div className="item" key={key}>
                                <Link to={`/detail/${movie.id}`}>
                                    <img src={movie.cardImg} alt={movie.title} />
                                </Link>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default Recommend;