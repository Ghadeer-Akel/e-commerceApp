import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './product.css'

const Product = (prop:any) => {

  return (
    <>
        <div className="card main_card">
        <img src={prop.image} className="card-img-top p-3" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{prop.title.slice(0,15)}</h5>
            <p className="card-text">{prop.description.slice(0,50)}....</p>
            <Link to={`/products/${prop.id}`} className="btn btn-success">Details</Link>
        </div>
</div>
    </>
  )
}

export default Product