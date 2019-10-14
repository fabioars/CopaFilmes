import React from 'react';
import Header from '../components/Header';

export default function Home() {
    return (
        <div className="Home">
            <Header title="Fase de seleção">
                <p>Selecione 8 filmes que você deseja que entrem na competição e depois pressione o botão Gerar Meu Campeonato para prosseguir.</p>
            </Header>
        </div>
    );
}
