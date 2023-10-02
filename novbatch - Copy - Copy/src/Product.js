import React from 'react'

export default function Product(props) {
  return (
    <div>
       <img src={props.product.image} alt="" />
       <div>
        <h1>{props.product.title}</h1>
        <h5>{props.product.price}</h5>
        <p>{props.product.description}</p>
       </div>
    </div>
  )
}
