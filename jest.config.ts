export default {
    preset: 'ts-jest',
    roots: ['<rootDir>/src'],
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir/src/**/*.ts>'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    coverageDirectory: 'coverage',
    testEnvironment: 'node',
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
  };
  