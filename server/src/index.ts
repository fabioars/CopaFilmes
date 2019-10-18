import main from './app';
import env from './env';

// tslint:disable-next-line: no-console
main().listen(env.port, () => console.log(`Listening on: ${env.port}`));
