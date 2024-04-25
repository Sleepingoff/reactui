import Panel from '@/components/molecules/Panel/Panel';
import Title from '@/components/molecules/Title/Title';
import useTab, { TabContext } from '@/hooks/useTab';
import Prop from '@/types/Prop';
import React, { useEffect, useMemo } from 'react';

interface PropType<T> extends Prop<T> {
  key?: string;
}

const TabTitle = ({ key, children, ...props }: PropType<HTMLLIElement>) => {
  const {} = useTab();

  return (
    <li key={key} {...props}>
      <Title htmlFor="">{children}</Title>
    </li>
  );
};

const TabMenus = ({ children, ...props }: PropType<HTMLUListElement>) => {
  return <ul>{children}</ul>;
};

const Tab = ({ children, ...props }: Prop<HTMLElement>) => {
  const {} = useTab();
  const value = useMemo(() => ({}), []);
  return (
    <section {...props}>
      <TabContext.Provider value={value}>{children}</TabContext.Provider>
    </section>
  );
};

Tab.Menu = TabMenus;
Tab.Title = TabTitle;
Tab.Panel = Panel;

export default Tab;
