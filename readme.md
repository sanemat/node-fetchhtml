# set up

```
$ docker run --rm -it $(docker build -q .) /bin/bash
% npx ts-node fetch.ts https://example.com https://example.net
```

## test

```
$ npm test
```
