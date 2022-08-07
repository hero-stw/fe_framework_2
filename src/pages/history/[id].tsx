import { useHistory } from '@/hooks/playingHistory'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

type Props = {}

const HistoryDetail = (props: Props) => {
    const { getHistory } = useHistory();
    const [total, setTotal] = useState<any>([])
    const router = useRouter()
    console.log(total);


    useEffect(() => {
        const history = async () => {
            const data = await getHistory(router.query.id)
            setTotal(data)
        }
        history()
    }, [])

    return (
        <div>
            <div>
                <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
                <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />
                <main className="profile-page">
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
                                                Detail Result
                                            </h3>
                                        </div>
                                        <Link href="/history">
                                            <a className='block text-center opacity-50 hover:text-blue-300'>Back to history</a>
                                        </Link>
                                        <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                            <div className="flex flex-wrap justify-center">
                                                <div className="w-full lg:w-9/12 px-4">
                                                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                                        <div className="overflow-x-auto relative">
                                                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                                                <thead className="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                                    <tr>
                                                                        <th scope="col" className="py-3 px-6">
                                                                            STT
                                                                        </th>
                                                                        <th scope="col" className="py-3 px-6">
                                                                            Calculator
                                                                        </th>
                                                                        <th scope="col" className="py-3 px-6">
                                                                            Input Value
                                                                        </th>
                                                                        <th scope="col" className="py-3 px-6">
                                                                            Correct Result
                                                                        </th>
                                                                        <th scope="col" className="py-3 px-6">
                                                                            Margin Of Error
                                                                        </th>
                                                                        <th scope="col" className="py-3 px-6">
                                                                            Time
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {total?.map((item, index) => (
                                                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                                                                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                {index + 1}
                                                                            </th>
                                                                            <td className="py-4 px-6">
                                                                                {item.calculator}
                                                                            </td>
                                                                            <td className="py-4 px-6">
                                                                                {item.inputValue}
                                                                            </td>
                                                                            <td className="py-4 px-6">
                                                                                {item.correctResult}
                                                                            </td>
                                                                            <td className="py-4 px-6">
                                                                                {item.marginOfError}
                                                                            </td>
                                                                            <td className="py-4 px-6">
                                                                                {item.time}
                                                                            </td>
                                                                        </tr>
                                                                    ))

                                                                    }

                                                                </tbody>
                                                            </table>
                                                        </div>

                                                    </p>
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

        </div>
    )
}
export default HistoryDetail