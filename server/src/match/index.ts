import { Router, Request, Response } from 'express';
import HTTP from 'http-status-code';
import { Movie } from '../movies/interfaces';
import MatchMaker from './MatchMaker';
import Cup from './Cup';
import { sortCriteriaMaker } from './helpers';

const router = Router();

router.post('/', (req: Request, res: Response) => {
    const movies = req.body as Movie[];

    const sortbyTitle = sortCriteriaMaker('titulo');
    movies.sort(sortbyTitle);

    try {
        const matchList = MatchMaker.make(movies);
        const cup = new Cup(matchList);
        const finalMatch = cup.run();

        res.send({
            first: finalMatch.getWinner(),
            second: finalMatch.getLooser(),
        });
    } catch (e) {
        res.sendStatus(HTTP.INTERNAL_SERVER_ERROR)
            .send({
                code: HTTP.INTERNAL_SERVER_ERROR,
                message: e.getMessage(),
            });
    }
});

export default router;
