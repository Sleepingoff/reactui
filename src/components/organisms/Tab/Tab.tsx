import { useMemo, useState } from 'react';

import Panel from '@/components/molecules/Panel/Panel';
import Title from '@/components/molecules/Title/Title';

import useTab, { TabContext } from '@/hooks/useTab';

import { DataType } from '@/types/Context/TabContext';
import Prop from '@/types/Prop';

import styles from './Tab.module.scss';

interface PropType<T> extends Prop<T> {
  menu: DataType[];
}
const TabTitle = ({ children, ...props }: Prop<HTMLLIElement>) => {
  const { list, current, actions } = useTab();
  const handleClickTab = actions.handler;
  //todo: tab으로 이동후 enter키 누르면 해당 탭에 click 이벤트 발생
  //todo: tab으로 이동후 아래 화살표 누르면 아래 카드로 focus 이동
  return (
    <>
      {list.map((item: DataType) => {
        return (
          <li
            role="tab"
            tabIndex={0}
            className={current === item.id ? styles.active : styles.title}
            {...props}
            key={item.id}
            onClick={handleClickTab(item.id)}
          >
            <Title htmlFor={item.id}>{item.content}</Title>
            {children}
          </li>
        );
      })}
    </>
  );
};

const TabPanel = ({ children, ...props }: Prop<HTMLDivElement>) => {
  const { current } = useTab();

  return (
    current === props.id && (
      <Panel className={styles.tabPanel} {...props}>
        {children}
      </Panel>
    )
  );
};

const TabMenus = ({ children, ...props }: Prop<HTMLUListElement>) => {
  return (
    <ul role="tablist" className={styles.tabMenu} {...props}>
      {children}
    </ul>
  );
};

const Tab = ({ menu, children, ...props }: PropType<HTMLElement>) => {
  const defaultList = menu ?? [];

  useTab();
  const [currentId, setCurrentId] = useState<string>(defaultList[0].id);

  const handleClickTab = (id: string) => () => {
    setCurrentId(id);
  };

  const contextValue = {
    list: defaultList,
    current: currentId,
    actions: {
      handler: useMemo(() => handleClickTab, [currentId])
    }
  };

  const value = useMemo(() => contextValue, [contextValue]);
  return (
    <section className={styles.tab} {...props}>
      <TabContext.Provider value={value}>{children}</TabContext.Provider>
    </section>
  );
};

Tab.Menu = TabMenus;
Tab.Title = TabTitle;
Tab.Panel = TabPanel;

export default Tab;
