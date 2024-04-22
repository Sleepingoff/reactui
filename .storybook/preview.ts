// 모든 stort들에 글로벌하게 적용될 포맷을 세팅
import '../src/assets/design/global.css';
// npx sb init을 통해 세팅된 값
// controls - 개발자가 코드를 수정하지 않아도 storybook에서 동적으로 인터렉션 가능하도록 .
export const parameters = {
  // Global 하게 argType에 on 으로 시작하는 이벤트 핸들러 함수들을 모두 허용하는 정규식을 적어주면, Action 탭에서 이벤트가 발생하는 것을 감지할 수 있음
  actions: { argTypesRegex: '^on[A-Z].*' },
  // 해당 데이터타입을 가진 속성을 만났을 때 정규표현식을 통해 데이터타입에 따라 storybook은 이들을 적절하게 테스팅할 수 있도록 매칭해줄 것.
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

// 글로벌 스타일 적용시키고 싶다면 여기서 적용시켜줄 수 있음 (추후 decorator같은 것들)
