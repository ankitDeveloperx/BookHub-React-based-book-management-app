import React, { useRef } from 'react';
import '../../assets/styles/adduser.css'
import { useNavigate } from 'react-router-dom';

const AddUsers = () => {
    let formData = useRef();
    let navigate = useNavigate()
    let handleSubmit = (e) => {
        e.preventDefault();

        let newUser = {
            firstname: formData.current[0].value,
            lastname: formData.current[1].value,
            contact: formData.current[2].value,
            email: formData.current[3].value,
            password: formData.current[4].value,
            dob: formData.current[5].value,
            place: formData.current[6].value
        };

        fetch('http://localhost:4000/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        })
        navigate('/adminPortal/users')
        // .then(() => alert(`${firstname}${lastname}: User added successfully`))
        // .catch((err) => console.log(err));
    };

    return (
        <div className="addusers">
            <div className="header">
                <h2>Add New User</h2>
            </div>

            <div className="container">
                <div className="form-box">
                    <form ref={formData} onSubmit={handleSubmit}>
                        <input type="text" placeholder='Enter First Name' required/>
                        <input type="text" placeholder='Enter Last Name' required/>
                        <input type="text" placeholder='Enter Contact Number' required/>
                        <input type="email" placeholder='Enter Email' required/>
                        <input type="password" placeholder="Password auto-sent to user’s email" disabled/>
                        <input type="date" placeholder='Enter DOB' required/>
                        <input type="text" placeholder='Enter Place' required/>

                        <button type="submit">Add User</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddUsers;
