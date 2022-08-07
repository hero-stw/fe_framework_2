import Header from '@/components/Header'
import { useHistory } from '@/hooks/playingHistory'
import Link from 'next/link'
import React from 'react'

type Props = {}

const HistoryPlay = (props: Props) => {

    const idUser = JSON.parse(localStorage.getItem("user"));
    console.log(idUser.user._id);
    const { data } = useHistory();
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

                                        <div className="flex justify-center items-center mt-28">
                                            <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                                                vanloc
                                            </h3>
                                        </div>
                                        <div className=" border-t border-blueGray-200 text-center">
                                            <div className="flex flex-wrap justify-center">
                                                <div className="w-full lg:w-9/12 px-4">
                                                    <h3 className="text-3xl font-semibold leading-normal py-8 text-blueGray-700">
                                                        Playing History
                                                    </h3>
                                                    <div className="overflow-x-auto relative mb-20">
                                                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                                            <thead className="text-xs text-white-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white">
                                                                <tr>
                                                                    <th scope="col" className="py-3 px-6">
                                                                        Margin Of Error
                                                                    </th>
                                                                    <th scope="col" className="py-3 px-6">
                                                                        Duration
                                                                    </th>
                                                                    <th scope="col" className="py-3 px-6 text-center">
                                                                        Result
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {data?.map((item) => {
                                                                    if (item.userId == idUser.user._id)
                                                                        return (
                                                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                                                <td className="py-4 px-6">
                                                                                    {item.error} %
                                                                                </td>
                                                                                <td className="py-4 px-6">
                                                                                    {item.duration} s
                                                                                </td>
                                                                                <td className="py-4 px-6 text-center">
                                                                                    <button className='bg-blue-700 w-20 h-8 text-white rounded-full'>
                                                                                        <Link href={`/history/${item._id}`}>Detail</Link>
                                                                                    </button>
                                                                                </td>
                                                                            </tr>
                                                                        )
                                                                })}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div >
    )
}
export default HistoryPlay