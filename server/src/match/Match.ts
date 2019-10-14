import { Movie } from '../movies/interfaces';

export default class Match {
    public home: Movie;
    public away: Movie;

    constructor(home: Movie, away: Movie) {
        this.home = home;
        this.away = away;
    }

    getWinner(): Movie {
        const { home, away } = this;

        if (this.hasSameGrade()) {
            return (home.titulo < away.titulo) ? home : away;
        }

        return this.isHomeWinner() ? home : away;
    }

    getLooser(): Movie {
        const { home, away } = this;

        if (this.hasSameGrade()) {
            return (home.titulo < away.titulo) ? away : home;
        }

        return this.isHomeWinner() ? away : home;
    }

    private hasSameGrade() {
        return this.home.nota === this.away.nota;
    }

    private isHomeWinner() {
        return this.home.nota > this.away.nota;
    }
}
