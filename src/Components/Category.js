import React, { useEffect, useState } from 'react'
import Product from './Product'
import Carousel from 'react-bootstrap/Carousel';


export const Category = (props) => {
    console.log(props.products)
    const [products, setProducts] = useState(props.products)

    return (


        <div className="container-11">
            <div className="row">
                {props.products?.map((product, id) => {
                    return <div className="col-md-3 "> <Product key={id} product={product}
                    /></div>
                })}
            </div>
        </div>

    )
}
