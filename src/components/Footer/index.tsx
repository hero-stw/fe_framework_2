import { avgOfArray, roundTo2 } from '@/commons';
import { saveAvgTime } from '@/store/slice/resultSlice';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveSumError } from "@/store/slice/resultSlice";
import style from "./Footer.module.css";


type Props = {}


const Footer = (props: Props) => {

    const [isActive, setIsActive] = useState(false);
    const handleOver = event => {
        setIsActive(true)
    }
    const handleClick = event => {
        setIsActive(false)
    }

    const marginOffError = useSelector((state: any) => state.total.total);
    let sum = 0;
    let save = 0
    const timelap = useSelector((state: any) => state.result.duration);

    const dispatch = useDispatch();

    marginOffError.map((item: any, index) => {
        index += 1
        sum += item.marginOfError
        if (index == 5) {
            sum /= 5
            save = avgOfArray(timelap)
            dispatch(saveAvgTime(save))
        } else {
            sum = 0
        }
    }
    )
    dispatch(saveSumError(sum));

    return (
        <>
            <div className="flex justify-between items-center relative ">
                <div className={style.popup}>
                    <img src="https://mconsultingprep.com/wp-content/uploads/2021/07/instructions.png" alt="Instruction" className='w-16' />
                    <h3 className={style.instruction} onMouseOver={handleOver}>Instructions</h3>
                    <div className={isActive ? style.show : style.pop__ins}>
                        <span className="absolute right-2 -top-0 text-2xl font-bold text-white cursor-pointer" onClick={handleClick}>×</span>
                        <div className=" px-4 text-white">
                            <p className={style.inspop}>
                                Set up your type of calculations and ceiling margin of error
                                on the top of the screen
                            </p>
                            <p className={style.inspop}>
                                Begin by pressing the Start/Retry button, then in put your
                                answers in the empty forms
                            </p>
                            <p className={style.inspop}>
                                Press ENTER to submit and move to next question, until you
                                complete or fail
                            </p>
                            <p className={style.inspop}>
                                Use the Start/Retry button to practice again
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex space-x-24 mr-8'>
                    <h2 className='text-xl font-bold'>AVERAGE</h2>
                    <div className='text-xl font-bold text-[#4092ed]'>
                        {roundTo2(sum)}%
                    </div>
                    <div className='text-xl font-bold text-[#4092ed]'>
                        {save}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer