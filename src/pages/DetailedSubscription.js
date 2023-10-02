import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { CheckCircle, CreditCard, FileEarmarkLock, Lock, Paypal, Person, PersonFill, ShareFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import DetailedSubscriptionCard from '../components/DetailedSubscriptionCard'
import BppCard from '../components/BppCard'

function DetailedSubscription() {
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center mt-5">

                <h1 className=' fw-bold'>a shared subscription</h1>
            </div>

            <div className="container d-flex flex-column justify-content-center align-items-center border border-dark border-2 rounded-start rounded-end p-3 m-5">
                <DetailedSubscriptionCard />
            </div>

            <div className="container d-flex flex-column justify-content-center align-items-center border border-dark border-2 rounded-start rounded-end p-3 m-5">

                <BppCard />
            </div>
        </>
    )
}

export default DetailedSubscription