import _ from 'lodash';
import Match from './Match';
import { Movie } from '../movies/interfaces';

export default class Cup {
    public matches: Match[];

    constructor(matches: Match[]) {
        this.matches = matches;
    }

    createNextRound(matches: Match[]): Match[] {
        const winningRound = matches.map(match => match.getWinner());

        const winnersGroup = _.chunk(winningRound, 2);

        const newRound = winnersGroup.map(group => {
            return new Match(group[0], group[1]);
        });

        return newRound;
    }

    fight(matches: Match[]): Match[] {
        if (matches.length === 1) {
            return matches;
        }

        return this.fight(this.createNextRound(matches));
    }

    run(): Match {
        const final = this.fight(this.matches).pop();
        return final;
    }
}
