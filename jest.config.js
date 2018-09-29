module.exports = {
  verbose: true,
  transform: {
    '.js$': 'babel-7-jest',
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFiles: ['<rootDir>/src/tests/setupTests.js'],
};
