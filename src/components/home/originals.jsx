import React from 'react';
import { useSelector } from 'react-redux';
import { selectOriginal } from '../../features/movieSlice';
import { Link } from 'react-router-dom';

import "./originals.scss"

const Originals = () => {
    const movies = useSelector(selectOriginal);

    return (
        <div id="originals">
            <h4>Originals</h4>
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

export default Originals;