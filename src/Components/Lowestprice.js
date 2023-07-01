import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';




export default function Lowestprice() {
    return (

        <div className=" container-5 ">
            <div className="row">
                <div className="col-md-6 " style={{ textAlign: 'center' }}>
                    <h1><b>Lowest Prices
                        Best Quality Shopping</b></h1>
                    <div className='row ' style={{ marginTop: '5%' }}>
                        <div className="col image">
                            <a href=' https://www.sendcloud.com/'> <img src='images/freed.png' alt='text' /></a>
                            <p><b>Free Delivery</b></p>
                        </div>
                        <div className="col image">
                            <img src='images/easyrt.png' alt='text' />
                            <p><b>Cash on Delivery</b></p>
                        </div>
                        <div className="col image">
                            <img src='images/easyr.png' alt='text' />
                            <p><b>Easy Returns</b></p>
                        </div>

                        <div className='app  image'>
                            <h4>Download the Messho App</h4>
                        </div>

                    </div>
                </div>
                <div className="col-md-6">
                    <img src='images/12.png' alt='text' style={{ height: '100%' }} />
                </div>
            </div>
        </div>


    )
}
