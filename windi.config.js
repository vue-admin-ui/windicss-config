const plugin = require('windicss/plugin')

module.exports = {
  theme: {
    fontFamily: {
      mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      roboto: 'Roboto, sans-serif',
      yandex: '"YS Text", sans-serif',
    },

  },
  plugins: [
    require('windicss/plugin/line-clamp'),
    require('windicss-plugin-font-size'),
  ],
}
