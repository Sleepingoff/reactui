import Wrapper from './Wrapper';

import type { Meta, StoryObj } from '@storybook/react';

// 메타 데이터, 제네릭에 Button 컴포넌트의 타입을 넘겨준다.
const meta: Meta<typeof Wrapper> = {
  // 사이드바에 표시할 카테고리
  title: 'Components/atoms/Wrapper',
  // 컴포넌트
  component: Wrapper,
  // 컴포넌트에 대한 문서를 자동으로 생성
  tags: ['autodocs'],
  argTypes: {}
};

// 메타 데이터를 디폴트로 export
export default meta;

// 스토리 타입, StoryObj의 제네릭에 컴포넌트의 타입을 넘겨준다.
type Story = StoryObj<typeof Wrapper>;

// 하나의 스토리, 스토리는 named export 해준다
// 스토리 이름도 사이드바 카테고리에 표시된다
export const Primary: Story = {
  // 컴포넌트에 필요한 arguments, 리액트 컴포넌트에게는 Props
  args: {
    children: 'Primary'
  }
};
