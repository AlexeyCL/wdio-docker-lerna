# wdio-docker-lerna

## Implementation a simple project with lerna and docker

#### Install and run tests
```npm install``` install all dependencies

```npm run e2e``` execution tests in packages

######
Problem:

after execution of tests the docker process is hanging

but:
```
cd wdio-docker-lerna/packages/test
npm run e2e
```
works as expected
