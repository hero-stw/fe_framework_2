import { randomCalculation } from '@/store/slice/calculationSlice';
import { saveInputValue } from '@/store/slice/resultSlice';
import { saveTotal } from '@/store/slice/totalSlice';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

type Props = {}

const Count = (props: Props) => {
    
    const dispatch = useDispatch();
    const [test1, setTest1] = useState<string>('')
    const phep = useSelector((state: any) => state.calculation.calculations)
    const Operations = useSelector((state: any) => state.calculation.Operations)
    const value = useSelector((state: any) => state.result.inputValue)
    const correctResult = useSelector((state: any) => state.result.correctResult)
    const marginOfError = useSelector((state: any) => state.result.marginOfError)
    const duration = useSelector((state: any) => state.result.duration)
    const total = useSelector((state: any) => state.total.total)
    const test = (event) =>{
      if(event.key === "Enter"){
        dispatch(saveInputValue(test1))
      }
    }
    useEffect(() => {
      if(value != ''){
        dispatch(saveTotal({
          calculator: Operations,
          inputValue: value,
          correctResult: correctResult,
          marginOfError: marginOfError,
          duration: duration
        }))
      }
      
    }, [value])
    console.log(total);
    
    
  return (
    <div>
        <div>
          {
            phep.map((data: any) => 
              <>
                <div>{data}</div>
                <input type="text" onKeyDown={test} onInput={(event) => setTest1(event.target.value)} />
              </>
            )
          }
          {
            total.map((data: any) => 
              <>
                <div>{data.calculator}</div>
              </>
            )
          }
        </div>
        <button onClick={() => {dispatch(randomCalculation())}}>add count</button>
    </div>
  )
}

export default Count