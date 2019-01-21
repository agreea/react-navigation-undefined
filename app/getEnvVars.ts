import R from 'ramda'
import ENV from '@/env'
import RNConfig from '@/utils/RNConfig'

// // TODO: write tests
console.log('ENV: ', ENV)

export const isBuildEnvironment = (environmentName: string) => {
  return (<string>RNConfig.buildEnvironment)
    .toLowerCase()
    .includes(environmentName.toLowerCase())
}

export const isProduction = isBuildEnvironment('prod')

export const isStaging =
  process.env.NODE_ENV !== 'development' &&
  process.env.NODE_ENV !== 'test' &&
  isBuildEnvironment('debug')

const useStaging = true

export const getEnvPrefix = () => {
  let envPrefix: 'STAGING' | 'DEV' | 'PROD'
  if (
    process.env.NODE_ENV === 'development' ||
    process.env.NODE_ENV === 'test'
  ) {
    envPrefix = 'DEV'
  } else if (isStaging) {
    envPrefix = useStaging ? 'STAGING' : 'DEV'
  } else if (isProduction) {
    envPrefix = 'PROD'
  } else {
    // assume staging
    envPrefix = 'STAGING'
  }
  return envPrefix
}

// .env file should have all variable prefixed by environment: STAGING, DEV, or PROD
// We may want to eventually implement a fallback where it goes for the "naked" key after
// trying the prefixed key
// This function takes the desired "naked" variable names and prepends the environment value to access
// the ENV variable.
// (on dev) @/envs('CLIENT_ID', 'CLIENT_SECRET') returns:
// { CLIENT_ID: 'DEV_CLIENT_ID_VALUE', CLIENT_SECRET: 'DEV_CLIENT_SECRET_VALUE'}

const env: (
  ...keys: Array<
    | 'API'
    | 'ALGOLIA_APP_ID'
    | 'ALGOLIA_API_KEY'
    | 'ALGOLIA_INDEX_NAME'
    | 'ROLLBAR_TOKEN'
  >
) => Obj<string> | string = (...keys) => {
  const envPrefix = getEnvPrefix()
  if (keys.length === 1) {
    return ENV[envPrefix][keys[0]]
  }
  return R.pick<Obj<string>, string>(keys, ENV[envPrefix])
}

export default env
