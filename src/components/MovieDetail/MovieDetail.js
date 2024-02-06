import React from 'react';
import {useLocation} from 'react-router-dom';

function MovieDetail() {
    const location = useLocation();
    const state = location.state;

    if (!state) {
        return <div>No state found</div>;
    }

    return (
        <div className="movie-detail">
            <img width={
                200
            } src={state.movie.img} alt={state.movie.title}/>
            <h2>{state.movie.title}</h2>
            <p>{state.movie.descrShort}</p>
        </div>
    );
}

export default MovieDetail;
