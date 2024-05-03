import Box from '@/components/Box';
import RoomItems from '@/components/RoomItems';
import { getTranslations } from 'next-intl/server';
import HightLight from '@/components/HightLight';
import PantipRealTime from '@/components/PantipRealTime';
import PantipPick from '@/components/PantipPick';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Index() {
  return (
    <>
      <Box label="เลือกห้อง">
        <RoomItems />
      </Box>
      <Box
        label="Highlight"
        className="mt-5"
      >
        <HightLight />
      </Box>
      <Box
        label="Pantip Realtime"
        subLabel="กระทู้ที่มีคนเปิดอ่านมากในขณะนี้ อัปเดตทุกนาที"
        className="mt-5"
      >
        <PantipRealTime />
      </Box>
      <Box
        label="Pantip Pick"
        subLabel="กระทู้คุณภาพคัดเลือกโดยทีมงาน Pantip"
        className="mt-5"
      >
        <PantipPick />
      </Box>
    </>
  );
}
