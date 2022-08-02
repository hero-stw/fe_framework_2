import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { roundTo2, numDot, l100 } from "../../commons/index";
import { randomCalculation } from '@/store/slice/calculationSlice'
import { randomNumber } from '@/store/slice/numberSlice'
import { saveInputValue } from '@/store/slice/resultSlice';
import { saveTotal } from '@/store/slice/totalSlice';
import { currencyMask } from "@/mask";

type Props = {
    percent: number
}

const TableCalculator = ({ percent }: Props) => {

    const [calculation, setCalculation] = useState([]);
    const [showTotal, setShowTotal] = useState(true);
    const [numdot, setNumdot] = useState({ answer: 0 })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumdot({ ...numdot, [e.target.name]: e.target.value });
        console.log(numdot.answer);
    };
    // Danh sách phép tính
    const calculationList = useSelector((state: any) => state.calculation.calculations);
    const Operations = useSelector((state: any) => state.calculation.Operations);

    useEffect(() => {
        if (calculationList.length > 6) {
            return;
        } else {
            setCalculation(calculationList);
        }
    }, [calculationList])


    const dispatch = useDispatch();

    // Value input
    const [input, setInput] = useState<number>(0);

    // Phép tính
    const s = useSelector((state: any) => state.calculation.calculation)
    const a = useSelector((state: any) => state.calculation.a);
    const b = useSelector((state: any) => state.calculation.b);
    const total = useSelector((state: any) => state.total.total);
    // input store
    // const inputValue = useSelector((state:any) => state.result.inputValue)
    // Tính tổng hai số
    const [sum, setSum] = useState<number>(0);
    // Lưu phần trăm sai
    const [percentFalse, setPercentFalse] = useState<number>(0);
    // Thông báo lỗi sai
    const [notification, setNotification] = useState(false);
    const checkPercentFalse = (a: number, b: number) => {
        if (a > b) {  // Nếu kết quả lớn hơn %
            setNotification(true)
        } else {
            setNotification(false)
        }
    }
    const logicCalculation = (c) => {
        numDot(input)
        dispatch(saveInputValue(input))
        setSum(roundTo2(c))
        const savePercentage = Math.abs(input - c) / c * 100
        setPercentFalse(roundTo2(savePercentage))
        checkPercentFalse(savePercentage, Number(percent)) // So sánh phần trăm sai
    }
    const handleKeyDown = (event) => {
        // if((event.which >= 65 && event.which < 96) || (event.which > 105 && event.which <= 255 && event.which != 190)){
        //     setInput(0);
        // } 
        // if (event.which >= 37 && event.which <= 40) return; // arrow
        if (event.keyCode === 13) {
            if (s == '+') {
                const c = a + b;
                logicCalculation(c)
            }

            if (s == '-') {
                if (a < b) {
                    const c = b - a;
                    logicCalculation(c)
                } else {
                    const c = a - b
                    logicCalculation(c)
                }
            }

            if (s == '×') {
                const c = a * b
                logicCalculation(c)
            }

            if (s == '÷') {
                if (a < b) {
                    const c = b / a
                    logicCalculation(c)
                } else {
                    const c = a / b
                    logicCalculation(c)
                }
            }
            dispatch(randomCalculation())

        }
    }

    useEffect(() => {
        if (input != 0) {
            dispatch(saveTotal({
                calculator: Operations,
                inputValue: input,
                correctResult: sum,
                marginOfError: percentFalse,
                duration: 1
            }))
            setInput(0)
        }
    }, [sum])

    // Đóng thông báo sai
    const close = () => {
        setShowTotal(false)
    }

    return (
        <div>
            {
                notification ?
                    showTotal ?
                        <div className="w-full text-white bg-red-500 ">
                            <div className="container flex items-center justify-between px-6 py-4 mx-auto">
                                <div className="flex">
                                    <svg viewBox="0 0 40 40" className="w-6 h-6 fill-current">
                                        <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"></path>
                                    </svg>

                                    <p className="mx-3">Phẩn trăm sai quá cao !</p>
                                </div>
                                <button onClick={() => close()} className="p-1 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        :
                        <div className='calculation-table h-[23em]'>
                            <table className="table-auto w-full text-center m-auto border-none">
                                <thead>
                                    <tr>
                                        <th className='py-10' />
                                        <th className="">Operations</th>
                                        <th className="c3">Your Answer</th>
                                        <th>Correct Result</th>
                                        <th className="margin">Margin of Error</th>
                                        <th>Duration</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        total.map((item: any, index: number) => (
                                            <tr key={index} className='relative'>
                                                <td className='px-2' >{index += 1}</td>
                                                <td className='w-80 px-2 py-2'>
                                                    <p className='h-10 bg-[#F5F4F4] w-full rounded-xl pt-2'>{item.calculator}</p>
                                                </td>
                                                <td className='w-48'>
                                                    <input type="text" name='answer' value={item.inputValue} readOnly className='h-10 border border-yellow-500 w-full rounded-xl outline-none text-center' onChange={(e) => handleChange(currencyMask(e))} />
                                                </td>
                                                <td >{item.correctResult == 0 ? null : numDot(item.correctResult)}</td>
                                                <td >{item.marginOfError == 0 ? "" : l100(roundTo2(item.marginOfError))}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    :
                    <div className='calculation-table h-[23em]'>
                        <table className="table-auto w-full text-center m-auto border-none">
                            <thead>
                                <tr>
                                    <th className='py-10' />
                                    <th className="">Operations</th>
                                    <th className="c3">Your Answer</th>
                                    <th>Correct Result</th>
                                    <th className="margin">Margin of Error</th>
                                    <th>Duration</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    calculation.map((item, index) => (
                                        <tr key={index} className='relative'>
                                            {index == 5 ?
                                                <>
                                                    <td className='px-2' ></td>
                                                    <td className='w-80 px-2 py-2'>
                                                        <p hidden className='h-10 bg-[#F5F4F4] w-full rounded-xl pt-2'>{item}</p>
                                                    </td>
                                                    <td className='w-48'>
                                                        <input hidden type="text" name='answer' value={input} onKeyUp={handleKeyDown} onInput={(event) => setInput(event.target.value)} className='h-10 border border-yellow-500 w-full rounded-xl outline-none text-center' onChange={(e) => handleChange(currencyMask(e))} />
                                                    </td>
                                                </>
                                                :
                                                <>
                                                    <td className='px-2' >{index += 1}</td>
                                                    <td className='w-80 px-2 py-2'>
                                                        <p className='h-10 bg-[#F5F4F4] w-full rounded-xl pt-2'>{item}</p>
                                                    </td>
                                                    <td className='w-48'>
                                                        <input type="text" name='answer' onKeyUp={handleKeyDown} onInput={(event) => setInput(event.target.value)} className='h-10 border border-yellow-500 w-full rounded-xl outline-none text-center' onChange={(e) => handleChange(currencyMask(e))} />
                                                    </td>
                                                </>
                                            }

                                            {total.map((data: any) => (
                                                item === data.calculator ? <>
                                                    <td className='absolute' style={{ marginLeft: "48px", marginTop: "-40px" }}>{data.correctResult == 0 ? null : numDot(data.correctResult)}</td>
                                                    <td className='absolute' style={{ marginLeft: "250px", marginTop: "-40px" }}>{data.marginOfError == 0 ? "" : l100(roundTo2(data.marginOfError))}</td>
                                                </> : null
                                            ))}
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>

            }
            <hr className='py-4' />
        </div>
    )
}

export default TableCalculator