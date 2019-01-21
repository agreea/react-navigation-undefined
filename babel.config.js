module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/env',
    '@babel/preset-typescript'
  ],
  plugins: [
    ['dev-expression'],
    ['@babel/transform-flow-strip-types'],
    ['@babel/proposal-class-properties', { loose: true }],
    ['@babel/proposal-object-rest-spread']
  ]
}
