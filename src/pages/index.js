import TwitchChat from '@/components/TwitchChat';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen items-stretch justify-between ${inter.className}`}
    >
      <div className="flex-grow basis-[75%] content-center text-center">
        <h1>STONKS to the moon!</h1>
      </div>
      <div className="bg-secondary border-primary flex min-w-[340px] flex-grow basis-[25%] flex-col border-l-[1px]">
        <TwitchChat />
      </div>
    </main>
  );
}
