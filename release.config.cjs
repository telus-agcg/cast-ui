module.exports = {
  branches: [
    'master',
    { name: 'next', prerelease: true },
    { name: 'beta', prerelease: true },
  ],
  plugins: [
    'commit-analyzer-fail-on-no-release',
    '@semantic-release/release-notes-generator',
    ['@semantic-release/npm', { npmPublish: false }],
    '@semantic-release/github',
  ],
};
