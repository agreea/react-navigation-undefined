// taking an approach to prevent duplicate file errors, borrowed here:
// https://medium.com/@nhancv/react-native-build-release-duplicate-file-original-is-here-the-version-qualifier-may-be-implied-115e967c59e6
const fs = require('fs')
// this script appends the contents of `android-rn-gradle-fx` to
// `node_modules/react-native/react.gradle`.
// It's a gross fix, but the result of react-navigation and react-native's asset
// bundling not working together.
try {
  var curDir = __dirname
  var rootDir = process.cwd()

  var file = `${rootDir}/node_modules/react-native/react.gradle`
  var dataFix = fs.readFileSync(`${curDir}/android-react-gradle-fix`, 'utf8')
  var data = fs.readFileSync(file, 'utf8')

  var doLast = '__Duplicate file fix__'
  if (data.indexOf(doLast) !== -1) {
    throw 'Already fixed.'
  }

  var result = data.replace(
    /                \/\/ Set up inputs and outputs so gradle can cache the result/g,
    dataFix
  )
  fs.writeFileSync(file, result, 'utf8')
  console.log('Done')
} catch (error) {
  console.error(error)
}
