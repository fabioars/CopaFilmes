import Match from './Match';
import { Movie } from '../movies/interfaces';

export default class MatchMaker {
    static make(movies: Movie[]): Match[] {
        if (movies.length === 0) {
            throw Error('EmptyList');
        } else if(movies.length % 2 !== 0) {
            throw Error('OddListError');
        }

        const half = movies.length / 2;

        const homeMovies = movies.filter((m, i) => i < half);
        const awayMovies = movies.filter((m, i) => i >= half).reverse();
        const matches = homeMovies.map((home, index) => {
            return new Match(home, awayMovies[index]);
        });

        return matches;
    }
}
