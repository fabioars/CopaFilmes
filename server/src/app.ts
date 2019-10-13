import express from 'express';
import movies from './movies';

export default function main(port: string) {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    // Regiser modules
    app.use('/api/movies/', movies);

    // tslint:disable-next-line: no-console
    app.listen(port, () => console.log(`Listening on: ${port}`));

    return app;
}
