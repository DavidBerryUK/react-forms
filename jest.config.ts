import type { Config } from 'jest';

export default async (): Promise<Config> => {
    return {
        verbose: true,
        testMatch: ['<rootDir>/src/**/__tests__/**/*.spec.ts'],
        moduleFileExtensions: ['web.js', 'js', 'web.ts', 'ts', 'web.tsx', 'tsx', 'json', 'web.jsx', 'jsx', 'node'],
        transformIgnorePatterns: ['node_modules/(?!(nanoid)/)'],
    };
};