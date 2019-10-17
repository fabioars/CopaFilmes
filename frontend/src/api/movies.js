
export function fetchMovies() {
    return fetch('/api/movies').then(r => r.json());
}
