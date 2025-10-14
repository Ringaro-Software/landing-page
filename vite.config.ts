import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

declare const process: {
  cwd(): string;
};

const DEFAULT_BASE_URL = '/landing-page/';
const DEFAULT_PORT = 3000;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');
  const baseUrl = env.BASE_URL || DEFAULT_BASE_URL;
  const port = env.PORT ? parseInt(env.PORT) : DEFAULT_PORT;

  return {
    plugins: [react()],
    base: baseUrl,
    server: {
      port: isNaN(port) ? DEFAULT_PORT : port,
    },
  };
});
