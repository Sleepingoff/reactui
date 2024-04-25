import { Meta } from '@storybook/react';

import Title from './Title';

const meta: Meta = {
  title: 'Components/molecules/Title',
  component: Title,
  tags: ['autodocs'],
  args: {}
};

export default meta;

export const Example: typeof Title = () => {
  return <Title htmlFor="">Title </Title>;
};
