import React, {useState} from 'react'
import Navbar from '../Navbar/Navbar'
import "./Login.css"
import { useNavigate , Link } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: "",
        password: "",
    });

    const handleLogin = (e) =>{
        e.preventDefault();
        const loggedUser = JSON.parse( localStorage.getItem("user") );
        if ( input.email === loggedUser.email && input.password === loggedUser.password ){
            localStorage.setItem("loggedin",true);
            navigate("/");
        }else{
            alert("Invalid E-mail or Password");
        }
    }



    return (
        <div>
            <Navbar className="login-nav" />
            <form onSubmit={handleLogin} >
            <div className="container1" >
                <h1 id='heading'>Login</h1>
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
                <button type='submit' className='btn dark-btn btn-prop' >Login</button>
                <div className="para">
                    <p>Not have an account?</p>
                    <Link to="/register">
                        <u>Register Here</u>
                    </Link>
                </div>
            </div>
            </form>
        </div>
    )
}

export default Login
