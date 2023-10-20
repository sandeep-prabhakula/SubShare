import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, InputGroup } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

function Register() {
    const [user, setUser] = useState({
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        phoneNumber: ""
    })
    const regex = /^[ A-Za-z0-9_@*./#&+-]*$/

    const [confirmPassword, setConfirmPassword] = useState("")

    const [alert, SetAlert] = useState('')

    const confirmPasswordChangeListener = (e) => {
        setConfirmPassword(e.target.value)
    }

    // loading the object with the user credentials
    const onValueChangeListener = (e) => {
        setUser((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    const onMobilechangeListener = (e)=>{
        setUser((prev)=>({
            ...prev,
            [e.target.name]:`+91${e.target.value}`
        }))
    }
    const handleSubmission = async (e) => {
        e.preventDefault()
        SetAlert('')
        if (regex.test(user.password)
            && user.password.length >= 8
            && confirmPassword === user.password
            && user.phoneNumber.length===13
            && user.phoneNumber.startsWith('+91')) {
                try {
                const headerDict = {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                }
                // const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);
                // console.log(userCredential);
                const res = await fetch('https://subshare-api.azurewebsites.net/auth/signup', {
                    method: 'POST',
                    body: JSON.stringify(user),
                    headers: new Headers(headerDict)
                })
                const userDetail = await res.json()
                // console.log(userDetail)
                if(userDetail!==null){
                    SetAlert('Registration Successful')
                }
            } catch (err) {
                console.log(err);
                SetAlert('something went wrong')
            }

        }
        else {
            SetAlert('Invalid Credentials please verify your details')
        }
    }


    return (
        <>
            <section className='m-5'>
                <div className="container d-flex flex-column align-items-center justify-content-center border border-primary border-2 rounded-start rounded-end p-3 ">
                    <h1 className="h1 text-center my-5">Create your account</h1>
                    {alert && <Alert variant='warning'>{alert}</Alert>}
                    <Form className="w-75">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email"
                                onChange={onValueChangeListener} placeholder="name@example.com" required />
                        </Form.Group>


                        <Row className="mb-3">
                            <Form.Group as={Col} lg={6} md="4" controlId="validationCustom01">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    required
                                    type="text" onChange={onValueChangeListener}
                                    aria-required
                                    name='firstName'
                                    placeholder="First name"
                                    defaultValue="John"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} lg={6} md="4" controlId="validationCustom02">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    required
                                    type="text" onChange={onValueChangeListener}
                                    aria-required
                                    name='lastName'
                                    placeholder="Last name"
                                    defaultValue="Doe"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>

                        </Row>
                        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                            <Form.Label>Mobile</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">+91</InputGroup.Text>
                                <Form.Control
                                    type="tel"
                                    placeholder="Mobile Number"
                                    aria-describedby="inputGroupPrepend"
                                    name='phoneNumber'
                                    onChange={onMobilechangeListener}
                                    required
                                />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required type="password" onChange={onValueChangeListener} placeholder="Minimum 8 characters" name='password' minLength={8} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Confirm your password</Form.Label>
                            <Form.Control type="password" placeholder="Minimum 8 characters" onChange={confirmPasswordChangeListener} minLength={8}
                                required />
                        </Form.Group>

                    </Form>
                    <Button type="submit" onClick={handleSubmission} className='btn-lg rounded-pill'>Register</Button>
                    <div className="mt-5 text-center">
                        <span>Already have an account? <Link to="/login">Login</Link></span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register