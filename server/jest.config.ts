import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  testPathIgnorePatterns: ['.d.ts', '.ts'],
  moduleNameMapper: {
    '@graphql/(.*)': '<rootDir>/dist/graphql/$1',
    '@interfaces/(.*)': '<rootDir>/dist/interfaces/$1',
    '@lib/(.*)': '<rootDir>/dist/lib/$1',
    '@routes/(.*)': '<rootDir>/dist/routes/$1',
    '@utils/(.*)': '<rootDir>/dist/utils/$1',
  },
};
export default config;
