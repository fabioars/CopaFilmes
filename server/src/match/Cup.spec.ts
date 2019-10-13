import Match from './Match';
import MatchMaker from './MatchMaker';
import Cup from './Cup';

describe('Cup', () => {
    const firstPlace = { id: 'tt4154756', titulo: 'Vingadores: Guerra Infinita', ano: 2018, nota: 8.8 };
    const secondPlace = { id: 'tt3606756', titulo: 'Os Incríveis 2', ano: 2018, nota: 8.5 };

    let matches: Match[];

    beforeEach(() => {
        matches = MatchMaker.make([
            ...[],
            { id: 'tt3606756', titulo: 'Os Incríveis 2', ano: 2018, nota: 8.5 },
            { id: 'tt4881806', titulo: 'Jurassic World: Reino Ameaçado', ano: 2018, nota: 6.7 },
            { id: 'tt5164214', titulo: 'Oito Mulheres e um Segredo', ano: 2018, nota: 6.3 },
            { id: 'tt7784604', titulo: 'Hereditário', ano: 2018, nota: 7.8 },
            { id: 'tt4154756', titulo: 'Vingadores: Guerra Infinita', ano: 2018, nota: 8.8 },
            { id: 'tt5463162', titulo: 'Deadpool 2', ano: 2018, nota: 8.1 },
            { id: 'tt3778644', titulo: 'Han Solo: Uma História Star Wars', ano: 2018, nota: 7.2 },
            { id: 'tt3501632', titulo: 'Thor: Ragnarok', ano: 2017, nota: 7.9 },
        ]);
    });

    it('should the winning match', () => {
        const cup = new Cup(matches);

        const winningMatch = new Match(secondPlace, firstPlace);
        const finalMatch = cup.run();

        expect(finalMatch.home).toEqual(winningMatch.home);
        expect(finalMatch.away).toEqual(winningMatch.away);
    });

    it('should have "Vingadores: Gerra Infinita" as the winner', () => {
        const cup = new Cup(matches);
        const finalMatch = cup.run();

        expect(finalMatch.getWinner()).toEqual(firstPlace);
    });

    it('should have "Os Incríveis 2" as the second place', () => {
        const cup = new Cup(matches);
        const finalMatch = cup.run();

        expect(finalMatch.getLooser()).toEqual(secondPlace);
    });

});
