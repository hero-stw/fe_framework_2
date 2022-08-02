import { avgOfArray, roundTo2 } from '@/commons';
import { saveAvgTime } from '@/store/slice/resultSlice';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {saveSumError} from "@/store/slice/resultSlice" ;


type Props = {}


const Footer = (props: Props) => {
    
    const marginOffError = useSelector((state:any) => state.total.total);
    let sum = 0;
    let save = 0
    const timelap = useSelector((state:any) => state.result.duration);

    const dispatch = useDispatch();

    marginOffError.map((item:any, index) => {
        index += 1
        sum += item.marginOfError
        if(index == 5){
            sum /= 5
            save = avgOfArray(timelap)
            dispatch(saveAvgTime(save))
        }else{
            sum = 0
        }
      }
    )

    dispatch(saveSumError(sum));

    return (
        <div>
            <div className="flex justify-between items-center ">
                <div className='flex items-center space-x-3'>
                    <img src="https://mconsultingprep.com/wp-content/uploads/2021/07/instructions.png" alt="Instruction" className='w-16' />
                    <h3 className='text-2xl font-bold text text-[#4092ed] cursor-pointer'>Instructions</h3>
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
        </div>
    )
}

export default Footer