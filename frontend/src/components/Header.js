import React from 'react';
import './Header.css';

export default function Header({ title, subtitle, children }) {
    return (
        <header className="Header">
            <h1 className="Header__title">{title}</h1>
            <h2 className="Header__subtitle">{subtitle}</h2>

            <div className="Header__description">
                {children}
            </div>
        </header>
    );
}

Header.defaultProps = {
    title: '',
    subtitle: 'Campeonato de filmes',
    children: null,
};
