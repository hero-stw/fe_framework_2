import React, { useEffect, useState } from "react";
import style from "@/components/CalculatorHeader/Calculator_header.module.css";
import { useDispatch } from "react-redux";
import {
  randomCalculation,
  resetCalculation,
  saveOptions,
} from "@/store/slice/calculationSlice";
import { saveStart } from "@/store/slice/resultSlice";
import { resetTotal } from "@/store/slice/totalSlice";
type CalculationProps = {
  percent: number;
  setPercent: (per: number) => void;
};

const CalculatorHeader = ({ percent, setPercent }: CalculationProps) => {
  const [percentage, setPercentage] = useState<number>(percent);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const dispatch = useDispatch();

  const Start = () => {
    dispatch(saveStart(Date.now()));
  };
  const handlePercentage = (e: any) => {
    setPercentage(e.target.value);
  };
  useEffect(() => {
    percent = percentage;
    setPercent(percentage);
  }, [percentage]);

  return (
    <div>
      <div className="flex justify-between w-full">
        <div className={style.calculator__header}>
          <div className={style.calculator__header__item}>
            <div className={style.calculator__item__text}>
              <h1>MENTAL MATH</h1>
              <h1>PRACTICE TOOL</h1>
            </div>
          </div>
          <div className={style.calculator__text}>
            Knock down five calculations as fast as possible but stay within the
            Ceiling Margin of Error! If you overshoot the mark even once, youre
            out!!
          </div>
        </div>
        <div className={style.calculator__option}>
          <div className={style.calculator__option__item}>
            <h3 className="small-title">Caculation Type</h3>
            <select
              name=""
              id=""
              className="outline-none"
              onChange={(event) => dispatch(saveOptions(event.target.value))}
            >
              <option value="1">Basic Operations (All)</option>
              <option value="2">Additions (+)</option>
              <option value="3">Subtractions (-)</option>
              <option value="4">Multiplications (x)</option>
              <option value="5">Divisions (÷)</option>
            </select>
            <h3 className="small-title">Ceiling Margin of Error</h3>
            <label htmlFor="addend">
              <input
                type="number"
                className="outline-none px-2"
                value={percentage || 5}
                min="5"
                placeholder="%"
                step={1}
                id="margin"
                onInput={(event) => handlePercentage(event)}
              />
            </label>
          </div>
        </div>
        <div className={style.calculator__button}>
          <button
            onClick={() => {
              dispatch(randomCalculation());
              Start();
              setIsPlaying(true);
            }}
            className={isPlaying ? "!hidden" : "!block"}
          >
            <img
              src={
                "https://mconsultingprep.com/wp-content/uploads/2021/07/play.png"
              }
              className="inline-block"
            />
          </button>
          <button
            className={isPlaying ? "!block" : "!hidden"}
            onClick={() => {
              dispatch(randomCalculation());
              Start();
              setIsPlaying(false);
              dispatch(resetCalculation());
              dispatch(resetTotal());
            }}
          >
            <img
              src={
                "https://mconsultingprep.com/wp-content/uploads/2021/07/reload-arrow.png"
              }
              className="inline-block"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalculatorHeader;
