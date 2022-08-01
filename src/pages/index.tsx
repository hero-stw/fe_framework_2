import Header from '@/components/Header'
import type { NextPage } from 'next'
import style from "@/styles/Home.module.css";
import Footer from '@/components/Footer';
import LeaderBoard from '@/components/Leaderboard';
<<<<<<< HEAD
import CalculatorHeader from '@/components/Calculator_header';

=======
import Count from './test/count';
import TableCalculator from '@/components/TableCalculator';
import CalculatorHeader from '@/components/CalculatorHeader';
>>>>>>> 084f0d6b7a4b1d89de040b31cf402a724f554337
const Home: NextPage = () => {

  return (
    <div>
      <Count />
      <Header />
      <div className='flex px-2 py-10'>
        {/* Table Calculation */}
        <div className='w-full px-2'>
          <CalculatorHeader />
          <TableCalculator />
          <Footer />
        </div>
        {/* Ranking */}
        <div className='flex-initial w-64'>
          <LeaderBoard />
        </div>
      </div>
    </div>
  )
}

export default Home;
