import Header from '@/components/Header'
import type { NextPage } from 'next'
import style from "@/styles/Home.module.css";
import Footer from '@/components/Footer';
import Calculation from '@/components/Calculator';
import LeaderBoard from '@/components/Leaderboard';
import CalculatorHeader from '@/components/Calculator_header';


const Home: NextPage = () => {

  return (
    <div>
      <Header></Header>
      <div className='flex px-2 py-10'>
        <Calculation></Calculation>
        {/* Table Calculation */}
        <div className='w-full px-2'>
          <CalculatorHeader></CalculatorHeader>
          <div className='calculation-table'>
            <table className="table-auto w-full text-center m-auto border-none">
              <thead>
                <tr >
                  <th className='py-10' />
                  <th className="">Operations</th>
                  <th className="c3">Your Answer</th>
                  <th>Correct Result</th>
                  <th className="margin">Margin of Error</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='px-2'>1</td>
                  <td className='w-80 px-2 py-2'>
                    <p className='h-10 bg-[#F5F4F4] w-full rounded-xl'></p>
                  </td>
                  <td className='w-48'>
                    <input type="number" className='h-10 border border-yellow-500 w-full rounded-xl outline-none text-center' />
                  </td>
                </tr>
                <tr>
                  <td className='px-2'>2</td>
                  <td className='w-80 px-2 py-2'>
                    <p className='h-10 bg-[#F5F4F4] w-full rounded-xl'></p>
                  </td>
                  <td className='w-48'>
                    <input type="number" className='h-10 border border-yellow-500 w-full rounded-xl outline-none text-center' />
                  </td>
                </tr>
                <tr>
                  <td className='px-2'>3</td>
                  <td className='w-80 px-2 py-2'>
                    <p className='h-10 bg-[#F5F4F4] w-full rounded-xl'></p>
                  </td>
                  <td className='w-48'>
                    <input type="number" className='h-10 border border-yellow-500 w-full rounded-xl outline-none text-center' />
                  </td>
                </tr>
                <tr>
                  <td className='px-2'>4</td>
                  <td className='w-80 px-2 py-2'>
                    <p className='h-10 bg-[#F5F4F4] w-full rounded-xl'></p>
                  </td>
                  <td className='w-48'>
                    <input type="number" className='h-10 border border-yellow-500 w-full rounded-xl outline-none text-center' />
                  </td>
                </tr>
                <tr>
                  <td className='px-2'>5</td>
                  <td className='w-80 px-2 py-2'>
                    <p className='h-10 bg-[#F5F4F4] w-full rounded-xl'></p>
                  </td>
                  <td className='w-48'>
                    <input type="number" className='h-10 border border-yellow-500 w-full rounded-xl outline-none text-center' />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className='py-4' />
          <Footer></Footer>
        </div>
        {/* Ranking */}
        <div className='flex-initial w-64'>
          <LeaderBoard></LeaderBoard>
        </div>
      </div>
    </div >
  )
}

export default Home;
