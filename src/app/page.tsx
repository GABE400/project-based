import { Inter } from 'next/font/google';
import Paragraph from '../components/ui/Paragraph';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className=''>
      <Paragraph size='sm'>Hello World</Paragraph>
    </main>
  );
}
