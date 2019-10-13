import axios, { AxiosResponse } from 'axios';
import { Movie } from './interfaces';
import env from '../env';

export default class MovieRepository {
    getAll(): Promise<AxiosResponse> {
        return axios.get(`${env.movie_api}/api/filmes`);
    }
}
