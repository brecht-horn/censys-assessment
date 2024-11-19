export default {
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.jsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
    '\\.svg': '<rootDir>/svgTransform.js',
  },
  testEnvironment: 'jsdom',
  
};
