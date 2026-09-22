import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

declare const process: {
  cwd(): string;
};

const DEFAULT_BASE_URL = '/';
const DEFAULT_PORT = 3000;

// https://vitejs.dev/config/
const REQUIRED_BUILD_ENV = ['VITE_EMAILJS_SERVICE_ID', 'VITE_EMAILJS_TEMPLATE_ID', 'VITE_EMAILJS_PUBLIC_KEY'];

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');

  if (command === 'build') {
    const missing = REQUIRED_BUILD_ENV.filter((key) => !env[key]);
    if (missing.length) {
      throw new Error(`Missing env vars (contact form would not send): ${missing.join(', ')}. See .env.sample.`);
    }
  }
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
