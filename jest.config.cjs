module.exports = {
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    injectGlobals: true,
    testEnvironment: 'node',
};