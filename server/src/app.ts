import express from 'express';
import movies from './movies';
import match from './match';

export default function main() {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    // Regiser modules
    app.use('/api/movies/', movies);
    app.use('/api/match/', match);

    return app;
}
