import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';
import Topcategories from './Topcategories';
import Carousel from 'react-bootstrap/Carousel';


export default function Product(props) {
    console.log(props)
    console.log((props.product.images) ? props.product.images[1] : null)
    return (
        <div style={{ width: '300px', height: '300px', }}>
            <Carousel  >
                {props.product.images.map((image, index) => (
                    <Carousel.Item key={index}>
                        <img className="d-block w-100" src={image} alt="alt" style={{ width: '300px', height: '200px', }} />
                    </Carousel.Item>))}
            </Carousel>
            <p>MRP={props.product.price}</p>
            <p> Brand:{props.product.brand}</p>

        </div>
    )
}
