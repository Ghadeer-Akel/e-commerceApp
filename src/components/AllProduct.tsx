import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Product from './Product';

const AllProduct = () => {
    const [product,setProduct]=useState([]);
    const [catageory,setCatageory]=useState([]);
    const [,set]=useState([]); 

    const getAllProducts =()=>{
        fetch('https://fakestoreapi.com/products')
        .then((resp)=>resp.json())
        .then((data)=>setProduct(data))
    }

    const getGategeory =()=>{
        fetch('https://fakestoreapi.com/products/categories')
        .then((res)=>res.json())
        .then((data)=>{setCatageory(data)})
    }

    const getInCategeory= (name:any)=>{
        fetch(`https://fakestoreapi.com/products/category/${name}`)
        .then((res)=>res.json())
        .then((data)=>setProduct(data));
    }

    useEffect(()=>{
       getAllProducts();
       getGategeory();
    }
    ,[]);
  return (    
    <>
    <h1 className='text-center p-3'>Our Products</h1>
    <div>
        <Link className='btn btn-danger p-3 m-3' to={''} onClick={()=>getAllProducts()}>All Products</Link>
        {catageory.map((cat)=>{
            return(
                <Link className='btn btn-info p-3 m-3' key={cat} to={''} onClick={()=>getInCategeory(cat)}>{cat}</Link>
            );
        })}
    </div>
    <div className='container'>
    <div className='row '>
    {product.map((item:any,index:number)=>{
            return(
                <div className='col-3 m-2' key={item.id}>
                    <Product id={item.id} title={item.title} description={item.description} image={item.image}/>
                </div>
            );
        
    })}
    </div>
    </div>
    </>
  )
}

export default AllProduct