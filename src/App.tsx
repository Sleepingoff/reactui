import Accordion from '@/components/organisms/Accordion/Accordion';

const list = [
  { id: '123', title: 'title1', contents: 'contentsalskdjflsadjf;lajdsf' },
  { id: '1d23', title: 'title2', contents: 'contentsalskdjflsadjf;lajdsf' },
  { id: '1223', title: 'title3', contents: 'contentsalskdjflsadjf;lajdsf' },
  { id: '1243', title: 'title4', contents: '' }
];

function App() {
  const handleClickSummary = () => {
    console.log('click');
  };
  return (
    <>
      <Accordion>
        {list.map(item => {
          return (
            <Accordion.Details>
              <Accordion.Summary key={item.id} onClick={handleClickSummary}>
                <Accordion.Title>{item.title}</Accordion.Title>
                <Accordion.Icon src="" alt="" />
              </Accordion.Summary>
              <Accordion.Panel>{item.contents}</Accordion.Panel>
            </Accordion.Details>
          );
        })}
      </Accordion>
    </>
  );
}

export default App;
