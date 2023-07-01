import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Lowestprice from './Components/Lowestprice';
import Mymenubar from './Components/Mymenubar';
import Topcategories from './Components/Topcategories';
import Purse from './Components/Product';
import { useState, useEffect, react } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import { Button } from 'bootstrap';
import { Category } from './Components/Category';


function App() {


  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  const handleClick = (value) => {
    console.log(value)
    fetch(`https://dummyjson.com/products/category/${value}`)
      .then(res => res.json())
      .then(data => {
        console.log(data.products)
        setProducts(data.products)
      })
  }
  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setCategories(data)
      })
  }, [])
  return (
    <>
      <Header iteams={products} />
      <Mymenubar />
      <Lowestprice />


      <div className='app image'>
        <h1>Top Categories to choose from</h1>
      </div>
      <div className="navbar color-1">
        <div className="container">
          <div className="row">
            {categories.map((product) => { return <div className="col-md-2"><button className='app  image' style={{ background: ' #4250e9', color: 'white' }} onClick={() => { handleClick(product) }}>{product}</button></div> })
            }
          </div>
        </div>
      </div>

      <Category products={products} />





    </>
  );
}

export default App;
