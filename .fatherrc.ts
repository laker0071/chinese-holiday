import { defineConfig } from 'father';

export default defineConfig({
  esm: { input: 'src/client' },
  cjs: { input: 'src/server' },
  umd: { entry: 'src/client' },
  prebundle: {
    deps: {}
  },
});
