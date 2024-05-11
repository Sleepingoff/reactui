import { Meta } from '@storybook/react';
import ReactiveTextarea from './ReactiveTextarea';
import Title from '../Title/Title';

const meta: Meta<typeof ReactiveTextarea> = {};

export default meta;

export const HorizontalTextareaExample = () => {
  return (
    <>
      <Title htmlFor="textarea">textarea</Title>
      <br></br>
      <ReactiveTextarea
        id="textarea"
        horizontal
        maxCols={40}
        rows={10}
        placeholder="placeholder"
      />
    </>
  );
};
export const VerticalTextareaExample = () => {
  return (
    <>
      <Title htmlFor="textarea">textarea</Title>
      <br></br>
      <ReactiveTextarea
        id="textarea"
        vertical
        cols={20}
        maxRows={20}
        placeholder="placeholder"
      />
    </>
  );
};
export const ReactiveTextareaExample = () => {
  return (
    <>
      <Title htmlFor="textarea">textarea</Title>
      <br></br>
      <ReactiveTextarea
        id="textarea"
        vertical
        horizontal
        cols={20}
        rows={10}
        maxCols={40}
        maxRows={20}
        placeholder="placeholder"
      />
    </>
  );
};
