import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

function Login() {
    const [user, setUser] = useState({
        "email": "",
        "password": "",
    })

    const regex = /^[ A-Za-z0-9_@./#&+-]*$/

    // const [confirmPassword, setConfirmPassword] = useState("")

    const [alert, SetAlert] = useState('')

    // const confirmPasswordChangeListener = (e: any) => {
    //     setConfirmPassword(e.target.value)
    // }

    // loading the object with the user credentials
    const onValueChangeListener = (e: any) => {
        setUser((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmission = async (e: any) => {
        e.preventDefault()

        if (regex.test(user.password)
            && user.password.length >= 8) {
            
                const userDetail = await signInWithEmailAndPassword(auth, user.email, user.password);
                console.log(userDetail);
        }
        else {
            SetAlert('Invalid Credentials please verify your details')
        }
    }


    return (
        <>
            <section className='m-5'>
                <div className="container m-auto d-flex flex-column align-items-center justify-content-center border border-primary border-2 rounded-start rounded-end p-3 ">
                <h1 className="h1 text-center my-5">Login to your account</h1>
                    {alert && <Alert variant='warning'>{alert}</Alert>}
                    <Form className="w-75">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email"
                                onChange={onValueChangeListener} placeholder="name@example.com" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required type="password" onChange={onValueChangeListener} placeholder="Minimum 8 characters" name='password' minLength={8} />
                        </Form.Group>
                    </Form>
                    <Button type="submit" onClick={handleSubmission} className='btn-lg rounded-pill'>Login</Button>
                    <div className="mt-5">
                        <span>Don't have an account? <Link to="/register">Register</Link></span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;