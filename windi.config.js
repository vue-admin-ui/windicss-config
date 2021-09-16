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
    plugin(function ({ addDynamic, addUtilities }) {
      addUtilities({
        '.font-size-0': {
          fontSize: '0',
        },
      });

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

      addDynamic('font', ({ Utility, Style, Property }) => {
        const value =  Utility.body.replace('family-', '')
        const parsed = parseInt(value)
        if (!value) return;
        if (Utility.raw.startsWith('font-family-$')) {
          return Style(Utility.class, [
            Property('font-family', `var(--${value.replace('$', '')})`),
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
