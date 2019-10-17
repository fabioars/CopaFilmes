import React, { useState } from 'react';
import Header from '../components/Header';
import MovieSelector from './home/MovieSelector';
import MovieCounter from './home/MovieCounter';
import Button from '../components/Button';
import { match } from '../api/match';
import './Home.css';
import MatchResult from './home/MatchResult';

export default function Home() {
    const [selectedMovies, setSelectedMovies] = useState([]);
    const [matchResult, setMatchResult] = useState(null)

    function renderContent() {
        if(matchResult) {
            return (
                <React.Fragment>
                    <div className="Home__toolbar">
                        <Button onClick={() => setMatchResult(null)}>
                            Voltar
                        </Button>
                    </div>
                    <MatchResult match={matchResult} />
                </React.Fragment>
            );
        }

        return (
            <React.Fragment>
                <div className="Home__toolbar">
                    <MovieCounter count={selectedMovies.length} />
                    <Button
                        disabled={selectedMovies.length < 8}
                        onClick={async () => setMatchResult(await match(selectedMovies))}
                    >
                        Gerar meu campeonato
                    </Button>
                </div>
                <MovieSelector onSelectedChange={setSelectedMovies} />
            </React.Fragment>
        );
    }

    return (
        <main className="Home">
            <div className="container">
                <Header title="Fase de seleção">
                    <p>Selecione 8 filmes que você deseja que entrem na competição e depois pressione o botão Gerar Meu Campeonato para prosseguir.</p>
                </Header>
                {renderContent()}
            </div>
        </main>
    );
}
