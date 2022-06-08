/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // testPathIgnorePatterns: ['.d.ts', '.ts'],
  moduleNameMapper: {
    '@graphql/(.*)': '<rootDir>/dist/graphql/$1',
    '@interfaces/(.*)': '<rootDir>/dist/interfaces/$1',
    '@lib/(.*)': '<rootDir>/dist/lib/$1',
    '@routes/(.*)': '<rootDir>/dist/routes/$1',
    '@utils/(.*)': '<rootDir>/dist/utils/$1',
  },
};