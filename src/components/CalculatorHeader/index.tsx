import React, { useEffect, useState } from 'react'
import style from "@/components/CalculatorHeader/Calculator_header.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { randomCalculation } from '@/store/slice/calculationSlice'
import { randomNumber } from '@/store/slice/numberSlice'
import { random } from '@/commons'
type Props = {
    setCalculator: () => void,
    setPercent: () => void,
    percent: number
}

const CalculatorHeader = ({ setCalculator, setPercent, percent }: Props) => {
    const [icon, setIcon] = useState(true);
    const changeIcon = () => setIcon(false)
    const dispatch = useDispatch();

    const calculation = useSelector((state: any) => state.calculation.calculation);

    const a = useSelector((state: any) => state.calculation.a)

    const b = useSelector((state: any) => state.calculation.b)

    const showCalculator = (a: any, b: any, calculation: any) => {
        return a + " " + calculation + " " + b + " = ?";
    }
    const c = showCalculator(a, b, calculation)

    if (a != 0 && b != 0) {
        setCalculator(c)
    }

    return (
        <div>
            <div className='flex justify-between w-full px-14'>
                <div className={style.calculator__header}>
                    <div className={style.calculator__header__item}>
                        <div className={style.calculator__item__text}>
                            <h1>MENTAL MATH</h1>
                            <h1>PRACTICE TOOL</h1>
                        </div>
                    </div>
                    <div className={style.calculator__text}>
                        Knock down five calculations as fast as possible but stay within the Ceiling Margin of Error!
                        If you overshoot the mark even once, youre out!!
                    </div>
                </div>
                <div className={style.calculator__option}>
                    <div className={style.calculator__option__item}>
                        <h3 className="small-title">Ceiling Margin of Error</h3>
                        <label htmlFor="addend" >
                            <input type="number" className="outline-none px-2" value={percent == 0 ? "" : percent} id="margin" onInput={(event) => setPercent(event.target.value)} />
                        </label>
                    </div>
                </div>
                <div className={style.calculator__button}>
                    <button onClick={() => { changeIcon(), dispatch(randomCalculation()) }} >
                        <img src={icon ? "https://mconsultingprep.com/wp-content/uploads/2021/07/play.png" : "https://mconsultingprep.com/wp-content/uploads/2021/07/reload-arrow.png"} className='inline-block' />
                    </button>
                </div>
            </div></div >
    )
}

export default CalculatorHeader