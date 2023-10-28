import React, {useEffect, useState} from "react";

function Github(){
    const [data ,setData] = useState([]);
    //when the component is rendered, it will call the api and get the data
    useEffect(() => {
        fetch('https://api.github.com/users/ChayanSD')
            .then(response =>response.json())
            .then(data=>{
                setData(data);
            })
    }, []);
    return(
        <div className='bg-gray-500'>
           <h1 className='bg-orange-500 text-4xl text-center p-4'>Followers : {data.followers}</h1>
           <img src={data.avatar_url} alt={"GitHub Master"}/>
        </div>
    )
}
export default Github;