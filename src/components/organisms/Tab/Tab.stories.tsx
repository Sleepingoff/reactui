import { Meta, StoryObj } from '@storybook/react';
import Tab from './Tab';

const meta: Meta<typeof Tab> = {
  title: 'Components/organisms/Tab',
  component: Tab,
  tags: ['autodocs'],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Tab>;

export const Example: Story = {
  render: () => {
    return (
      <Tab>
        <Tab.Menu>
          <Tab.Title>panel1</Tab.Title>
        </Tab.Menu>
        <Tab.Panel id="panel1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
          reprehenderit suscipit, aliquam dignissimos iste ullam voluptatibus
          culpa deleniti unde? Odio modi non officia ipsam laborum sunt tenetur
          natus vel repudiandae.
        </Tab.Panel>
      </Tab>
    );
  }
};
