import React from 'react'
import CalculatorHeader from '../CalculatorHeader'

type Props = {}

const TableCalculator = (props: Props) => {
    return (
        <div>
            <CalculatorHeader />
            <div className='calculation-table'>
                <table className="table-auto w-full text-center m-auto border-none">
                    <thead>
                        <tr >
                            <th className='py-10' />
                            <th className="">Operations</th>
                            <th className="c3">Your Answer</th>
                            <th>Correct Result</th>
                            <th className="margin">Margin of Error</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='px-2'>1</td>
                            <td className='w-80 px-2 py-2'>
                                <p className='h-10 bg-[#F5F4F4] w-full rounded-xl'></p>
                            </td>
                            <td className='w-48'>
                                <input type="number" className='h-10 border border-yellow-500 w-full rounded-xl outline-none text-center' />
                            </td>
                        </tr>
                        <tr>
                            <td className='px-2'>2</td>
                            <td className='w-80 px-2 py-2'>
                                <p className='h-10 bg-[#F5F4F4] w-full rounded-xl'></p>
                            </td>
                            <td className='w-48'>
                                <input type="number" className='h-10 border border-yellow-500 w-full rounded-xl outline-none text-center' />
                            </td>
                        </tr>
                        <tr>
                            <td className='px-2'>3</td>
                            <td className='w-80 px-2 py-2'>
                                <p className='h-10 bg-[#F5F4F4] w-full rounded-xl'></p>
                            </td>
                            <td className='w-48'>
                                <input type="number" className='h-10 border border-yellow-500 w-full rounded-xl outline-none text-center' />
                            </td>
                        </tr>
                        <tr>
                            <td className='px-2'>4</td>
                            <td className='w-80 px-2 py-2'>
                                <p className='h-10 bg-[#F5F4F4] w-full rounded-xl'></p>
                            </td>
                            <td className='w-48'>
                                <input type="number" className='h-10 border border-yellow-500 w-full rounded-xl outline-none text-center' />
                            </td>
                        </tr>
                        <tr>
                            <td className='px-2'>5</td>
                            <td className='w-80 px-2 py-2'>
                                <p className='h-10 bg-[#F5F4F4] w-full rounded-xl'></p>
                            </td>
                            <td className='w-48'>
                                <input type="number" className='h-10 border border-yellow-500 w-full rounded-xl outline-none text-center' />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <hr className='py-4' />
        </div>
    )
}

export default TableCalculator