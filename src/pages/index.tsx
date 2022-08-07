import Header from '@/components/Header'
import type { NextPage } from 'next'
import Footer from '@/components/Footer';
import LeaderBoard from '@/components/Leaderboard';
import TableCalculator from '@/components/TableCalculator';
import CalculatorHeader from '@/components/CalculatorHeader';
import { useRef, useState } from 'react';
import Count from './test/count';
const Home: NextPage = () => {

  const [calculator, setCalculator] = useState('');

  const [percent, setPercent] = useState<number>(0);

  return (
    <div>
      <Header />
      <div className='flex justify-between m-auto w-[80em] py-16'>
        {/* Table Calculation */}
        <div className='w-full px-2'>
          {/* Prop % */}
          <CalculatorHeader calculator={calculator} setCalculator={setCalculator} percent={percent} setPercent={setPercent} />
          <TableCalculator percent={percent} />
          <Footer />
        </div>
        {/* Ranking */}
        <div className='flex-initial w-72 h-full'>
          <LeaderBoard />
        </div>
      </div>
    </div >
  )
}

export default Home;
