import Accordion from './Accordion';

import type { Meta } from '@storybook/react';

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
    }
  }
};

export default meta;

const list = [
  {
    id: '123',
    title: 'title1',
    contents:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione atque, officiis consectetur optio a porro numquam maiores accusantium illo. Debitis voluptatem quaerat eos temporibus culpa quia nisi quisquam quidem voluptatum.'
  },
  {
    id: '1d23',
    title: 'title2',
    contents:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione atque, officiis consectetur optio a porro numquam maiores accusantium illo. Debitis voluptatem quaerat eos temporibus culpa quia nisi quisquam quidem voluptatum.'
  },
  {
    id: '1223',
    title: 'title3',
    contents:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione atque, officiis consectetur optio a porro numquam maiores accusantium illo. Debitis voluptatem quaerat eos temporibus culpa quia nisi quisquam quidem voluptatum.'
  },
  { id: '1243', title: 'title4', contents: '' }
];

export const Multiple = () => {
  return (
    <>
      <Accordion>
        {list.map(item => {
          return (
            <Accordion.Details key={item.id} disabled={!item.contents}>
              <Accordion.Summary>
                <Accordion.Title htmlFor={item.id}>
                  {item.title}
                </Accordion.Title>
                <Accordion.Icon src="" alt="" />
              </Accordion.Summary>
              <Accordion.Panel id={item.id}>{item.contents}</Accordion.Panel>
            </Accordion.Details>
          );
        })}
      </Accordion>
    </>
  );
};

export const Single = (args: { title: string; content: string }) => {
  return (
    <Accordion>
      <Accordion.Details>
        <Accordion.Summary>
          <Accordion.Title htmlFor="example">{args.title}</Accordion.Title>
          <Accordion.Icon src="" alt="" />
        </Accordion.Summary>
        <Accordion.Panel id="example">{args.content}</Accordion.Panel>
      </Accordion.Details>
    </Accordion>
  );
};
