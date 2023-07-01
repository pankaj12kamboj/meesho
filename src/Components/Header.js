import { useState, useEffect } from 'react'
import Nav from 'react-bootstrap/Nav';
import { Col, Container, Row } from 'react-bootstrap';
import { Navbar, Image, Form, FormControl, Button } from "react-bootstrap";




export default function Header(props) {
    console.log(props.products)
    const [searchValue, setSearchValue] = useState()
    const [products, setProducts] = useState([]);


    useEffect(() => {
        // Fetch categories
        fetch('https://dummyjson.com/products/categories')
            .then(response => response.json())
            .then(categories => {

                // console.log(categories)
                // Fetch products for each category
                const fetchProducts = categories.map(category =>
                    fetch(`https://dummyjson.com/products/category/${category}`)
                        .then(response => response.json())
                );
                // Wait for all product fetches to complete
                Promise.all(fetchProducts)
                    .then(productsByCategory => {
                        // Combine all products into a single array
                        const allProducts = productsByCategory.flat();
                        setProducts(allProducts);
                    })
                    .catch(error => {
                        console.error('Error fetching products:', error);
                    });
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);


    function onKeyProduct(val) {
        (products.filter((val) => {
            if (searchValue === '') { return <div >{val}</div>; }
            console.log(products)
        })).map((value, index) => { return <div>{value.products.price}</div> })
        console.log(onKeyProduct, val)
    }

    return (
        <div>
            <Navbar>
                <Container>
                    <div className="column">

                        <h1 style={{ color: 'hwb(298 22% 7%)' }}>Messho</h1>

                    </div>
                    <div className="column">
                        <Form className="d-flex mx-auto">
                            <input type="text" placeholder="Search..." onChange={(event) => { setSearchValue(event.target.value) }} className="mr-2" />
                            <Button variant="outline-success" onClick={() => { onKeyProduct() }}>Search</Button>

                        </Form>


                    </div>
                    <div className="column">
                        <Nav style={{ marginLeft: '40%' }}>
                            <div >
                                <Image src='./images/video.png' alt='text' fluid />
                            </div>
                            <div>
                                <Image src='images/notic.png' alt='text' fluid />
                            </div>
                            <div >
                                <Image src='images/icon.png' alt='text' fluid />
                            </div>
                        </Nav>
                    </div>
                </Container>
            </Navbar >
        </div >
    )
}
