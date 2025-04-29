import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UsersLogin = () => {
        // let formData = useRef()
    
        // let handleAdminForm = (e) => {
        //     e.preventDefault()
    
        //     let emailField = formData.current[0]
        //     let pswdField = formData.current[1]
    
        //     let credential = {
        //         email : 'user@gmail.com',
        //         password : 'user123'
        //     }
    
        //     let {email , password} = credential
    
        //     let checkEmail = (emailField.value === email)
        //     let checkpswd = (pswdField.value === password)
    
        //     if(checkEmail && checkpswd)
        //     {
        //         alert('Login Successfully')
        //     }
        //     else{
        //         alert('Login Failed')
        //     }
        // }
        const formData = useRef()
        const [users, setUsers] = useState([])
        let navigate = useNavigate()
    
        useEffect(() => {
            const fetchApi = async () => {
                const usersApiData = await axios.get('http://localhost:4000/users')
                setUsers(usersApiData.data)
            }
            fetchApi()
        }, [users]) 
    
        //! collecting all user email address from users API
        let allUserEmail = users.map(elem => elem.email)
        
        const handleUserForm = (e) => {
            e.preventDefault()

            let inputValues = {
                emailVal : formData.current[0].value,
                passwordVal : formData.current[1].value
            }
            
            let {emailVal , passwordVal } = inputValues

            let emailBool = allUserEmail.includes(emailVal)
            let pswdBool = (passwordVal === 'user123')

            if (emailBool && pswdBool) {
                navigate('/userPortal')
            } else {
                alert('Login Failed')
            }
        }

    return (
        <>
            <div className="users-login">
                <form onSubmit={handleUserForm} ref={formData}>
                    <input type="email" placeholder='Enter email address' />
                    <input type="password" placeholder='Enter Password' />
                    <button>User Login</button>
                </form>
            </div>
        </>
    )
}


export default UsersLogin