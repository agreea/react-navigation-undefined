# React Navigation `undefined` Error

This is a repo demonstrating an error that seems related to `react-native@0.57.8`, `babel@^7` and `react-navigation@3.0.9`.

## Set up

```bash
yarn install
react-native link
react-native start --reset-cache
yarn start
```


You should see this error:
![](https://i.gyazo.com/d42275edc24456dd7e377c958806c243.png)

Most issues on `react-native` and `react-navigation`'s issue pages say this error has to do with the ordering of these two babel plugins:

```js
    ['@babel/transform-flow-strip-types'],
    ['@babel/proposal-class-properties', { loose: true }],
```

In `babel.config.js`, you'll see that `'@babel/transform-flow-strip-types'` comes before `'@babel/proposal-class-properties'` as prescribed, but the error still persists.