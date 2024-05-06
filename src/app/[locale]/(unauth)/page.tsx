import HightLight from '@/components/HightLight';
import MainContent from '@/components/MainContent';
import { getHightlights } from 'actions/getHightlights';
import { getSuggestTopics } from 'actions/getSuggestTopics';

export default async function Index() {
  const hightlights = await getHightlights();
  const suggestTopics = await getSuggestTopics();

  return (
    <>
      <HightLight data={hightlights}/>
      <MainContent data={suggestTopics}/>
    </>
  );
}
