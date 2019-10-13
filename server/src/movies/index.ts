import { Router, Request, Response } from 'express';
import HTTP from 'http-status-code';
import MovieRepository from './MovieRepository';

const router = Router();

router.get('/', async (req: Request, res: Response): Promise<any> => {
    const repository = new MovieRepository();

    const movieList = await repository.getAll();
    res.send(movieList.data);
});

export default router;
