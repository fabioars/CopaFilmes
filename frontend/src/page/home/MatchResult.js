import React from 'react';
import './MatchResult.css';

export default function MatchResult({ match }) {
    return (
        <section className="MatchResult">
            <div className="MatchResult__item">
                <span className="MatchResult__position">1º</span>
                <span className="MatchResult__movie">{match.first.titulo}</span>
            </div>

            <div className="MatchResult__item">
                <span className="MatchResult__position">2º</span>
                <span className="MatchResult__movie">{match.second.titulo}</span>
            </div>
        </section>
    );
}
