import type { App } from 'vue'

import { plugin, defaultConfig } from '@formkit/vue'
import { createProPlugin, rating, toggle, dropdown } from '@formkit/pro'

const proPlugin = createProPlugin('fk-XXXXXXXXXXX', {
  rating,
  toggle,
  dropdown,
})

const config = defaultConfig({
  plugins: [proPlugin],
})

export function registerFormkit(app: App<Element>) {
  app.use(plugin, config)
}
