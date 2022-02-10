/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  preset: '@shelf/jest-mongodb',
  testEnvironment: 'node',
  coverageProvider: 'babel',
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/*-protocols.ts',
    '!**/protocols/**'
  ],
  coverageDirectory: 'coverage',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
