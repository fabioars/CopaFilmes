#!/usr/bin/env sh
set -e
# exec npm install

if [ $NODE_ENV = 'production' ]; then
    exec npm run start
else
    exec npm run start:dev
fi

exec "$@"
