import React from 'react';
import './MovieCounter.css';

export default function MovieCounter({ count }) {
    return (
        <div className="MovieCounter">
            <span className="MovieCounter__title">Selecionados</span>
            <span className="MovieCounter__counter">{`${count}`} de 8 filmes</span>
        </div>
    );
}

MovieCounter.defaultProps = {
    count: 0
};
