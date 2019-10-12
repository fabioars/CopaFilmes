
export default {
    env: process.env.NODE_ENV || 'development',
    movie_api: process.env.MOVIE_API || 'https://copadosfilmes.azurewebsites.net',
    port: process.env.APP_PORT || 5000,
};
