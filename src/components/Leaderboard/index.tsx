import React from 'react'
import style from "@/components/Leaderboard/Leaderboard.module.css"
import Image from 'next/image';
import goldmedal from "@/img/gold-medal.png";
import silvermedal from "@/img/silver-medal.png";
import bronzemedal from "@/img/bronze-medal.png";
type Props = {}

const LeaderBoard = (props: Props) => {
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
                <div className={style.result__value}>
                    <div className="">
                        <Image src={goldmedal}></Image>
                    </div>
                    <div className="-mt-1">
                        <div className={style.result__username}>
                            Player
                        </div>
                        <div className={style.result__stat}>
                            <div className={style.result__percent}>
                                0%
                            </div>
                            <div className={style.result__time}>
                                00s 00
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.result__value}>
                    <div className="">
                        <Image src={silvermedal}></Image>
                    </div>
                    <div className="-mt-1">
                        <div className={style.result__username}>
                            Player
                        </div>
                        <div className={style.result__stat}>
                            <div className={style.result__percent}>
                                0%
                            </div>
                            <div className={style.result__time}>
                                00s 00
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.result__value}>
                    <div className={style.result__icon}>
                        <Image src={bronzemedal}></Image>
                    </div>
                    <div className="-mt-1">
                        <div className={style.result__username}>
                            Player
                        </div>
                        <div className={style.result__stat}>
                            <div className={style.result__percent}>
                                0%
                            </div>
                            <div className={style.result__time}>
                                00s 00
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.result__value}>
                    <div className={style.result__rank}>
                        <span>4</span>
                    </div>
                    <div className="-mt-1">
                        <div className={style.result__username}>
                            Player
                        </div>
                        <div className={style.result__stat}>
                            <div className={style.result__percent}>
                                0%
                            </div>
                            <div className={style.result__time}>
                                00s 00
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeaderBoard