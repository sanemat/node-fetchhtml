# set up & execute

```
$ docker run --rm -it $(docker build -q .) /bin/bash
% ./fetch.mjs https://example.com https://example.net
% ./fetch.mjs --metadata https://example.com
```

## test

```
$ npm test
```
