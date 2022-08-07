import Header from '@/components/Header'
import { useHistory } from '@/hooks/playingHistory'
import Link from 'next/link'
import React from 'react'
import { AiFillHome } from "react-icons/ai"

type Props = {}

const HistoryPlay = (props: Props) => {
    const { data } = useHistory();
    console.log(data);

    return (
        <div>
            <div>
                <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
                <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />
                <main className="profile-page">
                    <Header />
                    <section className="relative block min-h-[23em]">
                        <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80")' }}>
                            <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black" />
                        </div>
                    </section>
                    <section className="relative py-28 bg-blueGray-200">
                        <div className="container mx-auto">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                                <div className="">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full flex justify-center">
                                            <img alt="..." src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px" />
                                        </div>
                                    </div>
                                    <div>
                                        {data?.map((item) => (
                                            <>
                                                <div className="flex justify-center mt-28">
                                                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                                                        {item.userName}
                                                    </h3>
                                                </div>
                                                <div className="border-t border-blueGray-200">
                                                    <div className='py-5 flex justify-center'>
                                                        <h1 className='text-2xl font-bold'>Playing History</h1>
                                                    </div>
                                                    <div className="flex justify-center items-center pl-96 my-6">
                                                        <div>
                                                            <div>Calculator Type: </div>
                                                            <div>Margin of Error: </div>
                                                            <div>Time: </div>
                                                        </div>

                                                        <div className=" flex justify-start w-full lg:w-9/12 px-4">
                                                            {item.total.map((data) => (
                                                                <div className='flex flex-col px-6'>
                                                                    <div className='flex justify-center items-center'>
                                                                        {data.calculator}
                                                                    </div>
                                                                    <div className='flex justify-center items-center'>
                                                                        {data.marginOfError} %
                                                                    </div>
                                                                    <div className='flex justify-center items-center'>
                                                                        {data.time} s
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}
export default HistoryPlay