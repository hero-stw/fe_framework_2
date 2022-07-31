import { randomCalculation } from '@/store/slice/calculationSlice';
import { saveInputValue } from '@/store/slice/resultSlice';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

type Props = {}

const Count = (props: Props) => {
    const value = useSelector((state: any) => state.result.inputValue)
    const dispatch = useDispatch();
    const [test1, setTest1] = useState<string>('')
    const phep = useSelector((state: any) => state.calculation.calculations)

    const test = (event) =>{
      if(event.key === "Enter"){
        dispatch(saveInputValue(test1))
      }
    }
    console.log(value);
    
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
        </div>
        <button onClick={() => {dispatch(randomCalculation())}}>add count</button>
    </div>
  )
}

export default Count