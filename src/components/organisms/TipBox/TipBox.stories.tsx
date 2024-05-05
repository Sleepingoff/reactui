import { Meta } from '@storybook/react';
import TipBox from './TipBox';

const meta: Meta<typeof TipBox> = {
  title: 'Components/organisms/TipBox',
  component: TipBox,
  tags: ['autodocs'],
  argTypes: {}
};

export default meta;

export const TipBoxExample = () => {
  return (
    <TipBox>
      <TipBox.Panel>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores id
        rerum dicta, excepturi dignissimos natus nam magni facere,
        necessitatibus dolores expedita praesentium. Magnam sequi rem possimus
        dicta voluptate nemo. Optio.
      </TipBox.Panel>
      <TipBox.Button>Close</TipBox.Button>
    </TipBox>
  );
};
