import type { Config } from '@jest/types'

export default async (): Promise<Config.InitialOptions> => {
  return {
    preset: 'ts-jest',
    verbose: true,
    collectCoverage: true,
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleNameMapper: {
      '@/(.*)': '<rootDir>/src/$1'
    }
  }
}
