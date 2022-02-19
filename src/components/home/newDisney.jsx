import React from 'react';
import { useSelector } from 'react-redux';
import { selectNewDisney } from '../../features/movieSlice';
import { Link } from 'react-router-dom';

import "./newDisney.scss";

const NewDisney = () => {
    const movies = useSelector(selectNewDisney);
    console.log(movies)

    return (
        <div id="new-disney">
            <h4>New to Disney+</h4>
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

export default NewDisney;