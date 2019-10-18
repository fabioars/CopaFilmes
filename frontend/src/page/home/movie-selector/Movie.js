import React from 'react';
import './Movie.css';

export default function Movie({ movie, onClick, isSelected }) {
    const classNames = ['Movie']
    if(isSelected) {
        classNames.push('Movie--selected');
    }

    return (
        <div className={classNames.join(' ')} onClick={onClick}>
            <span className="Movie__title">{movie.titulo}</span>
            <span className="Movie__year">{movie.ano}</span>
        </div>
    );
};
