import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    let formData = useRef()

    let [emailErr , setEmailerr] = useState('')
    let [pswdErr , setpswderr] = useState('')
    let navigate = useNavigate()

    let err = `border:1px solid red; background-color:rgba(255, 0, 0, 0.151); box-shadow:0px 0px 5px red`
    let handleAdminForm = (e) => {
        e.preventDefault()

        let emailField = formData.current[0]
        let pswdField = formData.current[1]

        let credential = {
            email : 'admin@gmail.com',
            password : 'admin123'
        }

        let {email , password} = credential

        let checkEmail = (emailField.value === email)
        let checkpswd = (pswdField.value === password)

        if(checkEmail && checkpswd)
        {
            navigate('/adminPortal')
        }
        else{

            if(emailField.value === "" || emailField.value === null)
            {
                emailField.style.cssText = err
                setEmailerr('Email is Empty')
            }
            else if (pswdField.value === "" || pswdField.value === null)
            {
                pswdField.style.cssText = err
                setpswderr('Password is Empty')
            }
            else if(emailField.value !== email)
            {
                emailField.style.cssText = err
                setEmailerr('Invalid Email Address')
            }
            else if(pswdField.value !== password)
            {
                pswdField.style.cssText = err
                setpswderr('Invalid Password')
            }
        }
    }
    return (
        <>
            <div className="admin-login">
                <form onSubmit={handleAdminForm} ref={formData}>
                    <input type="email" placeholder='Enter email address' />
                    <span>{emailErr}</span>
                    <input type="password" placeholder='Enter Password' />
                    <span>{pswdErr}</span>
                    <button>Admin Login</button>
                </form>
            </div>
        </>
    )
}

export default AdminLogin