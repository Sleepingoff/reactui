import { Meta } from '@storybook/react';
import ReactiveTextarea from './ReactiveTextarea';
import Title from '../Title/Title';

const meta: Meta<typeof ReactiveTextarea> = {};

export default meta;

export const ReactiveTextareaExample = () => {
  return (
    <>
      <Title htmlFor="textarea">textarea</Title>
      <br></br>
      <ReactiveTextarea
        id="textarea"
        vertical
        horizontal
        maxCols={80}
        maxRows={160}
      />
    </>
  );
};
