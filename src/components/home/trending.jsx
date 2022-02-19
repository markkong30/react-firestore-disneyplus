import React from 'react';
import { useSelector } from 'react-redux';
import { selectTrending } from '../../features/movieSlice';
import { Link } from 'react-router-dom';

import "./trending.scss"

const Trending = () => {
    const movies = useSelector(selectTrending);

    return (
        <div id="trending">
            <h4>Trending</h4>
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

export default Trending;