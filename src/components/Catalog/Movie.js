import React from 'react';
import {Link} from 'react-router-dom';

function Movie(props) {
    return (
        <div key={props.index} className="movie">
            <Link state={
                {
                    movie: props.movie,
                    budget: props.budget,
                }
            } to={
                `/catalog/${props.movie.id}`
            }>
                <img width={50} src={props.movie.img} alt={props.movie.title}/>
            </Link>
                    
            <h3>{props.movie.title}</h3>
            <button disabled={
                props.budget < 3 || props.movie.isRented
            } onClick={() => {
                if (props.movie.isRented) {
                    props.setRented(props.rented.filter((rentedMovie) => {
                        return rentedMovie.id !== props.movie.id;
                    }))
                } else {
                    props.setRented([...props.rented, props.movie]);
                }
                props.movie.isRented = !props.movie.isRented;
                props.handleBudget(props.movie);
            }}>{props.movie.isRented ? "Unrent" : "Rent"}</button>
        </div>
    );
}

export default Movie;
