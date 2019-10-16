import React, { useEffect, useState } from 'react';
import Movie from './movie-selector/Movie';
import './MovieSelector.css';

export default function MovieSelector() {
    const [isLoading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [selectedMovies, setSelectedMovies] = useState([]);

    useEffect(() => {
        if(!isLoading) {
            return;
        }

        fetch('/api/movies').then(r => r.json())
            .then(data => {
                setLoading(false);
                setMovies(data);
            });
    });

    if (isLoading) {
        return <div>Carregando...</div>
    }

    return (
        <div className="MovieSelector">
            <ul className="MovieSeletor__list">
                {movies.map(movie => {
                    return (
                        <li className="MovieSelector__item" key={movie.id}>
                            <Movie movie={movie}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};
