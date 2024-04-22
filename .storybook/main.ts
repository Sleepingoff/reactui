import { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  addons: ['@storybook/addon-a11y'],
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  core: {
    disableTelemetry: true // 👈 Disables telemetry
  }
};

export default config;
