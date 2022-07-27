import React from 'react'
type Props = {}

const Calculation = (props: Props) => {
    return (
        <div>
            {/* Calculation */}
            <div className='flex-initial w-64'>
                <div className="p-4 font-medium cursor-pointer hover:bg-[#4092ed] hover:text-white hover:rounded-md hover:transition hover:delay-75 hover:duration-300 hover:ease-in-out">
                    Additions & Subtraction
                </div>
                <div className="p-4 font-medium cursor-pointer hover:bg-[#4092ed] hover:text-white hover:rounded-md hover:transition hover:delay-75 hover:duration-300 hover:ease-in-out">
                    Additions (+)
                </div>
                <div className="p-4 font-medium cursor-pointer hover:bg-[#4092ed] hover:text-white hover:rounded-md hover:transition hover:delay-75 hover:duration-300 hover:ease-in-out">
                    Subtractions (-)
                </div>
                <div className="p-4 font-medium cursor-pointer hover:bg-[#4092ed] hover:text-white hover:rounded-md hover:transition hover:delay-75 hover:duration-300 hover:ease-in-out">
                    Multiplications (x)
                </div>
                <div className="p-4 font-medium cursor-pointer hover:bg-[#4092ed] hover:text-white hover:rounded-md hover:transition hover:delay-75 hover:duration-300 hover:ease-in-out">
                    Divisions (÷)
                </div>
                <div className="p-4 font-medium cursor-pointer hover:bg-[#4092ed] hover:text-white hover:rounded-md hover:transition hover:delay-75 hover:duration-300 hover:ease-in-out">
                    Percentages (Both)
                </div>
                <div className="p-4 font-medium cursor-pointer hover:bg-[#4092ed] hover:text-white hover:rounded-md hover:transition hover:delay-75 hover:duration-300 hover:ease-in-out">
                    Percentages (xx % of)
                </div>
                <div className="p-4 font-medium cursor-pointer hover:bg-[#4092ed] hover:text-white hover:rounded-md hover:transition hover:delay-75 hover:duration-300 hover:ease-in-out">
                    Percentages (xx / yy)
                </div>
                <div className="p-4 font-medium cursor-pointer hover:bg-[#4092ed] hover:text-white hover:rounded-md hover:transition hover:delay-75 hover:duration-300 hover:ease-in-out">
                    Currencies (EUR & USD)
                </div>
            </div>
        </div>
    )
}

export default Calculation