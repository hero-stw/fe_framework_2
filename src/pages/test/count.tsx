import { randomCalculation, saveCalculations } from '@/store/slice/calculationSlice';
import { randomNumber } from '@/store/slice/numberSlice';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

type Props = {}

const Count = (props: Props) => {
    const dispatch = useDispatch()
    const a = useSelector((state: any) => state.number.a)
    const b = useSelector((state: any) => state.number.b)
    const ch = useSelector((state: any) => state.calculation.calculation)
    const phep = useSelector((state: any) => state.calculation.calculations)
    console.log(phep);
    
    useEffect(() => {
      const tinh = (a:number,b: number,ch: number) => {
        const pheptinh = a + " " + ch + " " + b + " = ?";
        dispatch(saveCalculations(pheptinh))
      }
      if(a!= 0){
        tinh(a,b,ch)
      }
      
    },[a,b,ch])
  return (
    <div>
        <div>
          {
            phep.map((data: any) => 
              
              <div>{data}</div>
            )
          }
        </div>
        <button onClick={() => {dispatch(randomNumber()), dispatch(randomCalculation())}}>add count</button>
    </div>
  )
}

export default Count