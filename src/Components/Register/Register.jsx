import React, { useState } from 'react'
import "./Register.css"
import Navbar from '../Navbar/Navbar'
import { useNavigate, Link } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate();
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleSubmit = (e) =>{
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(input));
        navigate("/login");
    };




    return (
        <div>
            <Navbar className="reg-nav" />
            <form onSubmit={handleSubmit} >
                <div className="container1">
                    <h1 id='heading'>Register</h1>
                    <div className="box">
                        <input
                            name='name'
                            value={input.name}
                            onChange={(e) =>
                                setInput({
                                    ...input,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            type="name" id='name' placeholder='Enter Your Name' required />
                    </div>
                    <div className="box">
                        <input
                            name='email'
                            value={input.email}
                            onChange={(e) =>
                                setInput({
                                    ...input,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            type="email" id='email' placeholder='Enter Your Email' required />
                    </div>
                    <div className="box">
                        <input
                            name='password'
                            value={input.password}
                            onChange={(e) =>
                                setInput({
                                    ...input,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            type="password" id='password' placeholder='Enter Your Password' required />
                    </div>
                    <button type='submit' className='btn dark-btn btn-prop' >Register</button>
                    <div className="para">
                        <p>Have already an account?</p>
                        <Link to="/login">
                            <u>Login Here</u>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register
