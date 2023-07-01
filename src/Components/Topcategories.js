import React from 'react'
import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Product from './Product'



export default function Topcategories(props) {
    console.log(props)
    const [category, setCategory] = useState(props.product)
    const [products, setProducts] = useState()
    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${category}`)
            .then(res => res.json())
            .then(data => {
                // console.log(products)
                setProducts(data.products)
            })
    }, [])

    return (
        <>

            <div className="col-md-2">
                <a href="">{category}</a>
            </div>

        </>







    )
}
