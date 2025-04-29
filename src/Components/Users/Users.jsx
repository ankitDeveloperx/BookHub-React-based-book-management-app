import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../../assets/styles/users.css'
import SendIcon from '@mui/icons-material/Send';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import emailjs from 'emailjs-com';
import { useLocation } from 'react-router-dom';

const Users = () => {
    let [users, setUsers] = useState([])
    let loc = useLocation()
    let pathBool = loc.pathname.startsWith('/adminPortal')

    useEffect(() => {
        let fetchApi = async () => {
            let usersApiData = await axios.get('http://localhost:4000/users')
            setUsers(usersApiData.data)
            console.log(usersApiData.data);
        }
        fetchApi()
    }, [])
    console.log(users);

    let deleteUser = (id , firstname) =>{
        let bool = window.confirm(`Do you want to Delete ${firstname} user`)
        if(bool){
            fetch(`http://localhost:4000/users/${id}` , {method : 'DELETE'})
            alert(`${firstname} : User is deleted Successfully`)
        }
        else{
            alert(`${firstname} : User is not deleted Successfully`)
        }
    }

    const sendEmail = (email, firstname) => {
        if (!email || !firstname) {
            alert("Recipient's name or email is missing.");
            return;
        }
    
        console.log('Sending email to:', email); 
        
        const templateParams = {
            to_name: firstname,
            to_email: email,
        };
    
        emailjs.send(
            'service_lwhrnkm',     
            'template_h492v1q',    
            templateParams,
            'FQDmer7pGJYZZcAgt'    
        ).then((result) => {
            alert('Email sent successfully!');
        }, (error) => {
            alert('Failed to send email. Please try again.');
            console.log(error.text);
        });
    };        
    return (
        <>
            <div className="users">
                <div className="header">
                    <h2>User Details</h2>
                </div>

                <div className="container">
                    <table border={2}>
                        <thead>
                            <tr>
                                <th>Slno</th>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Contact</th>
                                <th>Email</th>
                                {pathBool && <th>Password</th>}
                                {pathBool && <th>Date of Birth</th>}
                                <th>Age</th>
                                <th>Place</th>
                                {pathBool && <th>Send Email</th>}
                                {pathBool && <th>Delete</th>}
                            </tr>
                        </thead>

                        <tbody>
                            {
                                users.map((elem, index) => {
                                    let { id ,firstname, lastname, contact, email, password, dob, place } = elem
                                    let age = new Date().getFullYear() - dob.slice(0, 4)
                                    
                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{firstname}</td>
                                            <td>{lastname}</td>
                                            <td>{contact}</td>
                                            <td>{email}</td>
                                            {pathBool && <td>user123</td>}
                                            {pathBool && <td>{dob}</td>}
                                            <td>{age}</td>
                                            <td>{place}</td>
                                            {pathBool && <td><button onClick={() => sendEmail(email, firstname)}> <SendIcon className="preview-btn"/> </button></td>}
                                            {pathBool && <td><button onClick={() => deleteUser(id,firstname)}><DeleteForeverIcon className="dlt-btn"/></button></td>}
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Users