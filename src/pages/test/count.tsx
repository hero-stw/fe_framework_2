import { useHistory } from '@/hooks/playingHistory';
import { randomCalculation } from '@/store/slice/calculationSlice';
import { saveInputValue } from '@/store/slice/resultSlice';
import { saveTotal } from '@/store/slice/totalSlice';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

type Props = {}

const Count = (props: Props) => {
    
  const {data } = useHistory()
    console.log(data);
    
  return (
    <div>
        <div>
          {
            
          }
          
        </div>
    </div>
  )
}

export default Count