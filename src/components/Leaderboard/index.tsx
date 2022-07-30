import React, { useEffect, useState } from 'react'
import style from "@/components/Leaderboard/Leaderboard.module.css"
import Image from 'next/image';
import goldmedal from "@/img/gold-medal.png";
import silvermedal from "@/img/silver-medal.png";
import bronzemedal from "@/img/bronze-medal.png";
import axios from 'axios';
type Props = {}

const LeaderBoard = (props: Props) => {

    const[users,setUsers] = useState([]);

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
                return ++index;
        }
    }

    useEffect(() =>{
        const handleUsers = async () =>{
            const {data} = await axios.get("https://62d4ee22cd960e45d45dc40a.mockapi.io/users");
            setUsers(data);
        }
        handleUsers();
    },[])

    return (
        <div>
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
                        <div key={item.id} className={style.result__value}>
                        <div className="">
                            {
                                sortUsers(index)
                            }
                        </div>
                        <div className="-mt-1">
                            <div className={style.result__username}>
                                {item.name}
                            </div>
                            <div className={style.result__stat}>
                                <div className={style.result__percent}>
                                    {item.percent}
                                </div>
                                <div className={style.result__time}>
                                    {item.time}
                                </div>
                            </div>
                        </div>
                    </div>
                    ))
                }

            </div>
        </div>
    )
}

export default LeaderBoard