module.exports = {
    preset: 'ts-jest/presets/js-with-babel',
    testEnvironment: 'jsdom',
    automock: false,
    globals: {
        'ts-jest': {
            diagnostics: false,
        },
    },
    moduleNameMapper: {
        '^~/(.*)$': '<rootDir>/src/$1',
        '\\.(css|less)$': 'identity-obj-proxy',
    },
    transform: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/fileTransformer.ts',
    },
    setupFiles: ['<rootDir>/test-setup.ts'],
}
