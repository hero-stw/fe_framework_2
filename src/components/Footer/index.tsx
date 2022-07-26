import React from 'react'

type Props = {}

const Footer = (props: Props) => {
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
                        00.00%
                    </div>
                    <div className='text-xl font-bold text-[#4092ed]'>
                        00.00
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer