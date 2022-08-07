import Header from "@/components/Header";
import type { NextPage } from "next";
import Footer from "@/components/Footer";
import LeaderBoard from "@/components/Leaderboard";
import TableCalculator from "@/components/TableCalculator";
import CalculatorHeader from "@/components/CalculatorHeader";
import { useRef, useState } from "react";
import Count from "./test/count";
import { useSelector } from "react-redux";
const Home: NextPage = () => {
  const percent = useSelector((state: any) => state.result.percent);

  return (
    <div>
      <Header />
      <div className="flex justify-between m-auto w-[80em] py-16">
        {/* Table Calculation */}
        <div className="w-full px-2">
          {/* Prop % */}
          <CalculatorHeader />
          <TableCalculator />
          <Footer />
        </div>
        {/* Ranking */}
        <div className="flex-initial w-72 h-full">
          <LeaderBoard />
        </div>
      </div>
    </div>
  );
};

export default Home;
