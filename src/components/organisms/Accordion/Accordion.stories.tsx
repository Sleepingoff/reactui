import type { Meta, StoryObj } from '@storybook/react';

import Accordion from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/organisms/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text'
    },
    content: {
      control: 'text'
    },
    icon: {
      control: { type: 'file', accept: '.png' }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Accordion>;
const list = [
  { id: '123', title: 'title1', contents: 'contentsalskdjflsadjf;lajdsf' },
  { id: '1d23', title: 'title2', contents: 'contentsalskdjflsadjf;lajdsf' },
  { id: '1223', title: 'title3', contents: 'contentsalskdjflsadjf;lajdsf' },
  { id: '1243', title: 'title4', contents: '' }
];

export const Primary: Story = {
  render: args => (
    <>
      <Accordion>
        {list.map(item => {
          return (
            <Accordion.Details key={item.id}>
              <Accordion.Summary>
                <Accordion.Title>{item.title}</Accordion.Title>
                <Accordion.Icon src={args.icon} alt="" />
              </Accordion.Summary>
              <Accordion.Panel>{item.contents}</Accordion.Panel>
            </Accordion.Details>
          );
        })}
      </Accordion>
    </>
  )
};
