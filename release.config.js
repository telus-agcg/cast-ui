const branch = process.env.CIRCLE_BRANCH;

const config = {
  branches: ['master', { name: 'beta', prerelease: true }],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    '@semantic-release/github',
  ],
};
if (
  config.branches.some(
    it => it === branch || (it.name === branch && !it.prerelease),
  )
) {
  config.plugins.push(
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'package-lock.json', 'CHANGELOG.md'],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  );
}

module.exports = config;