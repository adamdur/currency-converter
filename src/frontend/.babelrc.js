module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);
  return {
    presets: [
      ['@babel/preset-env', {
        targets: {
          browsers: [
            'last 3 major versions',
            'not ie > 0'
          ]
        }
      }],
      '@babel/preset-typescript',
      '@babel/preset-react'
    ],
    // Applies the react-refresh Babel plugin on non-production modes only
    ...(api.env('local') && { plugins: [['react-refresh/babel', { skipEnvCheck: true }]] }),
  }
}

