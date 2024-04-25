import Panel from '@/components/molecules/Panel/Panel';
import Title from '@/components/molecules/Title/Title';
import useTab, { TabContext } from '@/hooks/useTab';
import { DataType } from '@/types/Context/TabContext';
import Prop from '@/types/Prop';
import { useMemo, useState } from 'react';

interface PropType<T> extends Prop<T> {
  menu: DataType[];
}
const TabTitle = ({ children, ...props }: Prop<HTMLLIElement>) => {
  const { list, actions } = useTab();
  const handleClickTab = actions.handler;

  return (
    <>
      {list.map((item: DataType) => {
        return (
          <li {...props} key={item.id} onClick={handleClickTab(item.id)}>
            <Title htmlFor={item.id}>{item.content}</Title>
          </li>
        );
      })}
    </>
  );
};

const TabPanel = ({ children, ...props }: Prop<HTMLOutputElement>) => {
  const { current } = useTab();

  return current === props.id && <Panel {...props}>{children}</Panel>;
};

const TabMenus = ({ children, ...props }: Prop<HTMLUListElement>) => {
  return <ul {...props}>{children}</ul>;
};

const Tab = ({ menu, children, ...props }: PropType<HTMLElement>) => {
  const defaultList = menu ?? [];

  const { current } = useTab();
  const [currentId, setCurrentId] = useState<string>(current);

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
    <section {...props}>
      <TabContext.Provider value={value}>{children}</TabContext.Provider>
    </section>
  );
};

Tab.Menu = TabMenus;
Tab.Title = TabTitle;
Tab.Panel = TabPanel;

export default Tab;
