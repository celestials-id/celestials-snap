import type { SnapConfig } from '@metamask/snaps-cli';

const config: SnapConfig = {
  input: './src/index.ts',
  server: {
    port: 8080,
  },
  stats: {
    buffer: true,
  },
  polyfills: {
    buffer: true,
  },
};

export default config;