import React, { useState } from 'react'
import '../assets/styles/landingpage.css'
import AdminLogin from './Admin/AdminLogin'
import UsersLogin from './Users/UsersLogin'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    const [bool, setBool] = useState(false)

    const handleToggle = () => {
        setBool(!bool)
    }

    return (
        <>
            <div className="landingpage">
                <div className="container">
                    <div className="btn-box">
                        <button onClick={handleToggle} className={bool ? 'lft-btn' : 'ryt-btn'}>
                            {bool ? "Admin Login" : "User Login"}
                        </button>
                    </div>

                    <div className="heading">
                        <h2>{bool ? 'Admin Login' : 'User Login'}</h2>
                    </div>

                    <div className="form-box">
                        {
                            bool?<AdminLogin/>:<UsersLogin/>
                        }
                    </div>

                    <div className='forgotten-pass'>
                        <Link to="/forget">Forgotten Password ?</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage
