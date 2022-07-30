import { randomNumber } from '@/store/slice/numberSlice';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

type Props = {}

const Count = (props: Props) => {
    const dispatch = useDispatch()
    const a = useSelector((state: any) => state.number.a)
    const b = useSelector((state: any) => state.number.b)
  return (
    <div>
        <div>count: {a}+{b}</div>
        <button onClick={() => dispatch(randomNumber())}>add count</button>
    </div>
  )
}

export default Count