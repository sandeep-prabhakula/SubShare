import React from 'react'
import CarousalCard from './CarousalCard'
import { Link } from 'react-router-dom'

function HeroDashboard() {
    const subscriptions = [
        {
            "id": 1,
            "subscriptionName": 'Disney + Hotstar',
            "price": "₹499"
        },
        {
            "id": 2,
            "subscriptionName": 'Youtube Premium',
            "price": "₹299"
        },
        {
            "id": 3,
            "subscriptionName": 'Spotify',
            "price": "₹199"
        },
        {
            "id": 4,
            "subscriptionName": 'Amazon Prime',
            "price": "₹699"
        },
        {
            "id": 5,
            "subscriptionName": 'Zee 5',
            "price": "₹399"
        },
    ]
    return (
        <>
            <div className="container d-flex flex-column justify-content-center align-items-center mt-5 ">

                <h1 className='display-1 fw-medium mb-5'>Services available <br /> for co-subscription</h1>
                <div className="row mt-5 p-2 mb-5">


                        {
                            subscriptions.map((item, index) => {
                                
                                return <CarousalCard subscription={item} />

                            })
                        }
                </div>
            </div>
        </>
    )
}

export default HeroDashboard