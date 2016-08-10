# Create a project from scratch

## Init NPM package

```
mkdir from-scratch
cd from-scratch
npm init
# Feed questions as you want!
cat package.json
```

## Create folder architecture

```
mkdir src
touch src/boot.ts
touch src/app.component.ts
touch src/app.component.spec.ts
touch index.html
echo "typings\nnode_modules" > .gitignore
```

## Install tsconfig

```
npm i --save-dev typescript
./node_modules/.bin/tsc --init
cat tsconfig.json
```

## Install tslint

https://github.com/palantir/tslint#installation

```
npm i --save-dev tslint
./node_modules/.bin/tslint --init
cat tslint.json
```

## Install Angular dependencies

https://angular.io/docs/ts/latest/quickstart.html

## NPM Scripts

From https://angular.io/docs/ts/latest/quickstart.html

## Karma Tests

Plusieurs implementation :
- SystemJS + Karma
- Karma + Typescript preprocessor
- Karma + Webpack plugin
