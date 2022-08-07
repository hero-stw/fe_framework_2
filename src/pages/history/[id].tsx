import { useHistory } from '@/hooks/playingHistory'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

type Props = {}

const HistoryDetail = (props: Props) => {
    const { getHistory } = useHistory();
    const [total, setTotal] = useState<any>([])
    const router = useRouter()
    console.log(router.query.id);
    
    useEffect(() => {
        const history = async () =>{
           const data =  await getHistory(router.query.id)
           setTotal(data)
        }
        history()
    },[])

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
                                                vanloc
                                            </h3>
                                        </div>
                                        <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                            <div className="flex flex-wrap justify-center">
                                                <div className="w-full lg:w-9/12 px-4">
                                                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">

                                                        <table className="table">
                                                            <thead>
                                                                <tr>
                                                                    <th scope='col'></th>
                                                                    <th scope="col">Calculator Type</th>
                                                                    <th scope="col">Margin Of Error</th>
                                                                    <th scope="col">Time</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {total?.map((item,index) => (
                                                                        <tr key={index}>
                                                                        <td>{index + 1}</td>
                                                                        <td>{}</td>
                                                                        <td>{item.calculator}</td>
                                                                        <td>{item.marginOfError}</td>
                                                                        <td>alo</td>
                                                                    </tr>
                                                                    ))
                                                                }

                                                            </tbody>
                                                        </table>

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