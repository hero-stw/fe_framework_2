import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

type Props = {}

const CalculationList = (props: Props) => {

    const[calculation,setCalculation] = useState([]);

    const calculationList = useSelector((state:any) => state.calculation.calculations);

    useEffect(() =>{
        setCalculation(calculationList);
    },[])
    
  return (
    <div>
        <tbody>
            {
                calculation?.map((item,index) => (
                    <tr key={index}>
                    <td className='px-2'>5</td>
                    <td className='w-80 px-2 py-2'>
                        <p className='h-10 bg-[#F5F4F4] w-full rounded-xl'></p>
                    </td>
                    <td className='w-48'>
                        <input type="number" className='h-10 border border-yellow-500 w-full rounded-xl outline-none text-center' />
                    </td>
                </tr>
                ))
            }
        </tbody>
    </div>
  )
}

export default CalculationList