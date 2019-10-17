import React, { useState } from 'react';
import Header from '../components/Header';
import MovieSelector from './home/MovieSelector';
import MovieCounter from './home/MovieCounter';
import './Home.css';

export default function Home() {
    const [selectedMovies, setSelectedMovies] = useState([]);

    return (
        <main className="Home">
            <div className="container">
                <Header title="Fase de seleção">
                    <p>Selecione 8 filmes que você deseja que entrem na competição e depois pressione o botão Gerar Meu Campeonato para prosseguir.</p>
                </Header>
                <div className="Home__toolbar">
                    <MovieCounter count={selectedMovies.length} />
                </div>
                <MovieSelector onSelectedChange={setSelectedMovies} />
            </div>
        </main>
    );
}
