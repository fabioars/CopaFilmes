import React, { useEffect, useState } from 'react';
import Movie from './movie-selector/Movie';
import './MovieSelector.css';

export default function MovieSelector({ onSelectedChange }) {
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
                onSelectedChange(selectedMovies);
            });
    });

    function toggleMovie(movie) {
        return () => {
            const isOnSelectedList = selectedMovies.indexOf(movie) === -1;
            const isListFull = selectedMovies.length >= 8;

            let newSelectedMovies = (!isOnSelectedList || isListFull)
                ? selectedMovies.filter(m => m.id !== movie.id)
                : [...selectedMovies, movie];

            setSelectedMovies(newSelectedMovies);
            onSelectedChange(newSelectedMovies);
        };
    }

    if (isLoading) {
        return <div>Carregando...</div>
    }

    return (
        <div className="MovieSelector">

            <ul className="MovieSeletor__list">
                {movies.map(movie => {
                    return (
                        <li className="MovieSelector__item" key={movie.id}>
                            <Movie
                                movie={movie}
                                onClick={toggleMovie(movie)}
                                isSelected={selectedMovies.indexOf(movie) !== -1}
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

MovieSelector.defaultProps = {
    onSelectedChange: l => l
}
