import { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    '@storybook/addon-designs',
    '@storybook/addon-actions',
    '@storybook/addon-controls'
  ],
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  core: {
    disableTelemetry: true // 👈 Disables telemetry
  }
};

export default config;
