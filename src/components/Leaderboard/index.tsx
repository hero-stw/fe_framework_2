import React, { useEffect, useState } from 'react'
import style from "@/components/Leaderboard/Leaderboard.module.css"
import Image from 'next/image';
import {useRecords} from "../../hooks/records";
import goldmedal from "@/img/gold-medal.png";
import silvermedal from "@/img/silver-medal.png";
import bronzemedal from "@/img/bronze-medal.png";

type Props = {}

const LeaderBoard = (props: Props) => {

    const [sidebar, setSidebar] = useState(true);
    const showSidebar = () => setSidebar(!sidebar);

    const[users,setUsers] = useState<any>([]);

    const {data:records} = useRecords();

    const sortUsers = (index) =>{

        // if(index == 0) {
        //     return <Image src={goldmedal}></Image>
        // }else if(index == 1){
        //     return <Image src={goldmedal}></Image>
        // }else if(index == 2){
        //     return <Image src={bronzemedal}></Image>
        // }else{
        //     return ++index;
        // }

        switch (index) {
            case 0:
                return <Image src={goldmedal}></Image>
            case 1:
                return <Image src={silvermedal}></Image>
            case 2:
                return <Image src={bronzemedal}></Image>
            default:
                return <div className='bg-gray-500 rounded-full h-8 w-8 flex justify-center items-center ml-2 text-white'>{++index}</div> ;
        }
    }

    useEffect(() =>{
        const handleUsers = () =>{
           if(records){
            setUsers(records);
           }
        }
        handleUsers();
    },[records])
    
    return (
        <div>
            <div className={style.nav__menu__icon}>
                <button onClick={showSidebar} >
                    <img src="https://cdn-icons-png.flaticon.com/512/6345/6345315.png" alt="Rank" width="50px" />
                </button>
            </div>
            <div className={sidebar ? style.nav__menu__active : style.nav__menu}>
            <div className={style.result}>
                <div className={style.result__title}>
                    Wall of fame
                </div>
                <div className={style.result__category}>
                    <select name="" id="">
                        <option value="1">Basic Operations</option>
                        <option value="2">Additions (+)</option>
                    </select>
                </div>

                {
                    users.map((item,index) => (
                        <div key={item._id} className={style.result__value}>
                        <div className="">
                            {
                                sortUsers(index)
                            }
                        </div>
                        <div className="-mt-1">
                            <div className={style.result__username}>
                                {item.userName}
                            </div>
                            <div className={style.result__stat}>
                                <div className={style.result__percent}>
                                    {item.error} %
                                </div>
                                <div className={style.result__time}>
                                    {item.timelapse}
                                </div>
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    </div>
    )
}

export default LeaderBoard