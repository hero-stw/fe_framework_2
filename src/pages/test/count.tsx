import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '@/store/slice/counterSlice'

type Props = {}

const Count = (props: Props) => {
    const dispatch = useDispatch()
    const count = useSelector((state: any) => state.count.count)
  return (
    <div>
        <div>count: {count}</div>
        <button onClick={() => dispatch(increment())}>add count</button>
    </div>
  )
}

export default Count