import React, { useEffect, useState } from 'react'
import style from "@/components/CalculatorHeader/Calculator_header.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { randomCalculation, resetCalculation, saveAddition, setInput } from '@/store/slice/calculationSlice'
import { randomNumber } from '@/store/slice/numberSlice'
import { random } from '@/commons'
import { saveInputValue, saveStart } from '@/store/slice/resultSlice'
import Swal from "sweetalert2"
import { resetTotal } from '@/store/slice/totalSlice'
import { Steps, Hints } from 'intro.js-react';

type Props = {
    setCalculator: () => void,
    setPercent: () => void,
    percent: number
}

const CalculatorHeader = ({ setCalculator, setPercent, percent }: Props) => {

    const steps = [
        {
          title: 'Xin chào',
          intro: 'Chào mừng bạn đến với ứng dụng tính nhẩm !',
        },
        {
          element: '#step1',
          intro: 'Read the rules carefully',
        },
        {
          element: '#step2',
          intro: 'Choose your favorite types on calculation',
        },
      ];
    
    const onExit = () => {};


    const [icon, setIcon] = useState(true);
    const changeIcon = () => setIcon(!icon);
    const [showpercent, setShowpercent] = useState(true);
    const [showButton, setShowButton] = useState(true);
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

    const Start = () => {
        dispatch(saveStart(Date.now()))
        console.log("Start!");
    };

    useEffect(() => {
      
    },[])

    return (
        <div>
            <div className='flex justify-between w-full'>
                <div className={style.calculator__header}>
                    <div className={style.calculator__header__item}>
                        <div className={style.calculator__item__text}>
                            <h1>MENTAL MATH</h1>
                            <h1>PRACTICE TOOL</h1>
                        </div>
                    </div>
                    <div className={style.calculator__text} id="step1">
                        Knock down five calculations as fast as possible but stay within the Ceiling Margin of Error!
                        If you overshoot the mark even once, youre out!!
                           {/* <Steps enabled={true} steps={steps} initialStep={1} onExit={onExit} /> */}
                    </div>
                </div>
                <div className={style.calculator__option}>
                    <div className={style.calculator__option__item}>
                        <h3 className="small-title">Caculation Type</h3>
                        <select name="" id="step2" className='outline-none'  onChange={(event) => dispatch(saveAddition(event.target.value))}>
                            <option value="1">Basic Operations (All)</option>
                            <option value="2">Additions (+)</option>
                            <option value="3">Subtractions (-)</option>
                            <option value="4">Multiplications (x)</option>
                            <option value="5">Divisions (÷)</option>
                        </select>
                           {/* <Steps enabled={true} steps={steps} initialStep={2} onExit={onExit} /> */}
                        <h3 className="small-title">Ceiling Margin of Error</h3>
                        <label htmlFor="addend" >
                            {showpercent ? <input type="number" className="outline-none px-2" value={percent == 0 ? "" : percent} id="margin" onInput={(event) => setPercent(event.target.value)} /> :
                                <input type="number" className="outline-none px-2" readOnly value={percent} id="margin" onInput={(event) => setPercent(event.target.value)} />
                            }
                        </label>
                    </div>
                </div>
                <div className={style.calculator__button}>
                    {
                        percent == 0 ?
                            <button onClick={() => Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Vui lòng nhập phần Ceiling Margin of Error!',
                            })} >
                                <img src={"https://mconsultingprep.com/wp-content/uploads/2021/07/play.png"} className='inline-block' />
                            </button>
                            :
                            showButton ?
                                <button onClick={() => { changeIcon(), dispatch(randomCalculation()), Start(), setShowpercent(!showpercent), setShowButton(!showButton) }} >
                                    <img src={icon ? "https://mconsultingprep.com/wp-content/uploads/2021/07/play.png" : "https://mconsultingprep.com/wp-content/uploads/2021/07/reload-arrow.png"} className='inline-block' />
                                </button>
                                :
                                <button onClick={() => { changeIcon(), dispatch(resetCalculation()), dispatch(resetTotal()), dispatch(setInput('0')), Start(), setShowpercent(!showpercent), setShowButton(!showButton) }} >
                                    <img src={icon ? "https://mconsultingprep.com/wp-content/uploads/2021/07/play.png" : "https://mconsultingprep.com/wp-content/uploads/2021/07/reload-arrow.png"} className='inline-block' />
                                </button>
                    }
                    {/* <button onClick={() => { changeIcon(), dispatch(randomCalculation()), Start(), setShowpercent(!showpercent) }} >
                        <img src={icon ? "https://mconsultingprep.com/wp-content/uploads/2021/07/play.png" : "https://mconsultingprep.com/wp-content/uploads/2021/07/reload-arrow.png"} className='inline-block' />
                    </button>*/}
                </div>
            </div>
        </div >
    )
}

export default CalculatorHeader