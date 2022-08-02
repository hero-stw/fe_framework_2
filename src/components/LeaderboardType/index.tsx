import useSetting from '@/hooks/settings';
import axios from 'axios';
import React, { useState,useEffect } from 'react'

type Props = {}

const LeaderboardType = (props: Props) => {
  return (
    <div>
         <select name="" id="">
            <option value="">Basic Operations (All)</option>  
            <option value="2">Additions (+)</option>
            <option value="3">Subtractions (-)</option>
            <option value="4">Multiplications (x)</option>
            <option value="5">Divisions (÷)</option>
        </select>
    </div>
  )
}

export default LeaderboardType