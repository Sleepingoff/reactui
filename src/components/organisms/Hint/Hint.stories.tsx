import { Meta } from '@storybook/react';
import Hint from './Hint';

const meta: Meta<typeof Hint> = {};

export default meta;

export const Tooltips = () => {
  return (
    <Hint title="Lorem" position="top">
      feature
    </Hint>
  );
};

export const Popovertips = () => {
  return (
    <Hint popover>
      <Hint.Trigger>feature</Hint.Trigger>
      <Hint.Content>
        <Hint.Panel>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          nisi incidunt culpa voluptatum nihil ex sunt. Vel nesciunt eius sed
          minima illo laborum vero accusantium. Facilis voluptate numquam ut
          magnam!
        </Hint.Panel>
        <Hint.Button>close</Hint.Button>
      </Hint.Content>
    </Hint>
  );
};
