import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      exclude: [
        "src/domains/@shared/**/*",
        "src/**/*.abstract.ts",
        "src/**/*.interface.ts",
      ]
    }
  }
})