import { Meta } from '@storybook/react';

import Tab from './Tab';

const meta: Meta<typeof Tab> = {
  title: 'Components/organisms/Tab',
  component: Tab,
  tags: ['autodocs'],
  argTypes: {
    menu: {
      control: 'array'
    }
  }
};

export default meta;

export const ExampleStory = () => {
  const data = [
    {
      id: 'panel1',
      content: 'panel1'
    },
    {
      id: 'panel2',
      content: 'panel2'
    },
    {
      id: 'panel3',
      content: 'panel3'
    }
  ];

  return (
    <Tab menu={data}>
      <Tab.Menu>
        <Tab.Title />
      </Tab.Menu>
      <Tab.Panel id={data[0].id}>
        <h1>1번</h1>
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolore
        aliquam! Architecto illum quaerat provident porro, saepe, labore itaque
        in placeat facilis quidem nisi culpa ullam aspernatur sint, ea adm'
      </Tab.Panel>
      <Tab.Panel id={data[1].id}>
        <h1>2번</h1>
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolore
        aliquam! Architecto illum quaerat provident porro, saepe, labore itaque
        in placeat facilis quidem nisi culpa ullam aspernatur sint, ea adm'
      </Tab.Panel>
      <Tab.Panel id={data[2].id}>
        <h1>3번</h1>
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolore
        aliquam! Architecto illum quaerat provident porro, saepe, labore itaque
        in placeat facilis quidem nisi culpa ullam aspernatur sint, ea adm'
      </Tab.Panel>
    </Tab>
  );
};
