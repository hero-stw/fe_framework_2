import axios from 'axios';
import React, { useState,useEffect } from 'react'

type Props = {}

const LeaderboardType = (props: Props) => {

    const [products,setProducts] = useState([]);

    useEffect(() =>{

        const handleCategories = async () =>{
            const {data} = await axios.get("https://62d4ee22cd960e45d45dc40a.mockapi.io/categories");
            setProducts(data)
            console.log(data);
        }

        handleCategories();

    },[])

  return (
    <div>
         <select name="" id="">
            {
                products.map((item) => (
                    <option key={item.id} value="">{item.name}</option>
                ))
            }            
        </select>
    </div>
  )
}

export default LeaderboardType