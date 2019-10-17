import React, { useEffect, useState } from 'react';
import Movie from './movie-selector/Movie';
import { fetchMovies } from '../../api/movies';
import './MovieSelector.css';

export default function MovieSelector({ onSelectedChange }) {
    const [isLoading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [selectedMovies, setSelectedMovies] = useState([]);

    useEffect(() => {
        if(!isLoading) {
            return;
        }

        fetchMovies()
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
        <section className="MovieSelector">

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
        </section>
    );
};

MovieSelector.defaultProps = {
    onSelectedChange: l => l
}
