module.exports = {
  async rewrites() {
    return [
      {
        source: '/concepts/:page(.md)',
        destination: '/concepts/:page',
      },
    ]
  },
}
