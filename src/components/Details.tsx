import React, { useEffect, useState } from 'react'
import { useParams  } from 'react-router-dom'

const Details = () => {
    const param:any = useParams();
    const [detail,setDetail]:any=useState({});

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${param.id}`)
        .then((res)=>res.json())
        .then((data)=>{setDetail(data);
        })
    },[]);

  return (
    <div>
        <h1 className='p-5'>Detail for {param.id}</h1>
        <h5 className='p-2'>Title : {detail.title}</h5>
        <h5 className='p-2'>Catageory : {detail.category}</h5>
        <h5 className='p-2'>Description : {detail.description}</h5>
        <h5 className='p-2'>price : {detail.price}$</h5>
        <h5 className='p-2'>Image : </h5>
        <img src={detail.image}/>
    </div>
  )
}

export default Details