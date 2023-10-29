import React, {useEffect, useState} from "react";
import {useLoaderData} from "react-router-dom";

function Github(){
    //Optimized way to load data from API
    const data = useLoaderData();

   /* const [data ,setData] = useState([]);
    //when the component is rendered, it will call the api and get the data
    useEffect(() => {
        fetch('https://api.github.com/users/ChayanSD')
            .then(response =>response.json())
            .then(data=>{
                setData(data);
            })
    }, []);*/
    return(
        <div className='bg-gray-500 flex flex-col items-center'>
            <h1 className='bg-orange-500 text-4xl text-center p-4 rounded-2xl'>Followers: {data.followers}</h1>
            <div className='flex justify-center'> {}
                <img src={data.avatar_url} alt="GitHub Master" width={300} className='rounded-full'/>
            </div>
        </div>

    )
}
export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ChayanSD')
   return response.json();
}