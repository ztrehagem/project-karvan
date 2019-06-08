module.exports = {
  outputDir: '../public',
  css: {
    loaderOptions: {
      stylus: {
        import: [
          '~@/styles/lib/variables',
          '~@/styles/lib/functions',
          '~@/styles/lib/mixins',
        ],
      },
    },
  },
}
