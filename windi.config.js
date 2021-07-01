const plugin = require('windicss/plugin')

module.exports = {
  // prefixer: false, /* https://github.com/windicss/windicss/issues/207 */
  theme: {
    fontFamily: {
      mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      roboto: 'Roboto, sans-serif',
      yandex: '"YS Text", sans-serif',
    },

  },
  plugins: [
    require('windicss/plugin/line-clamp'),
    plugin(function ({ addDynamic }) {
      addDynamic('font', ({ Utility, Style, Property }) => {
        const value =  Utility.body.replace('size-', '')
        const parsed = parseInt(value)
        if (!value) return;
        if (Utility.raw.startsWith('font-size-$')) {
          return Style(Utility.class, [
            Property('font-size', `var(--${value.replace('$', '')})`),
          ]);
        }
        if (Utility.raw.endsWith('px') && parsed) {
          return Style(Utility.class, [
            Property('font-size', `${parsed}px`),
          ]);
         }
      });
    }),
    plugin(function({ addUtilities }) {
      addUtilities({
        '.transition-duration': {'transition-duration': 'var(--transition-duration)'},
        '.transition-property-form-item': {'transition-property': 'var(--transition-property-form-item)'},
      })
    }),
  ],
}
