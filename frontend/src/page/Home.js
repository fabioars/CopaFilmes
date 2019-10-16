import React from 'react';
import Header from '../components/Header';
import MovieSelector from './home/MovieSelector';
import './Home.css';

export default function Home() {
    return (
        <div className="Home">
            <div className="container">
                <Header title="Fase de seleção">
                    <p>Selecione 8 filmes que você deseja que entrem na competição e depois pressione o botão Gerar Meu Campeonato para prosseguir.</p>
                </Header>
                <MovieSelector />
            </div>
        </div>
    );
}
