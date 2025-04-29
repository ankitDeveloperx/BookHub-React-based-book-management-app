import React, { useRef } from 'react'
import '../../assets/styles/addbooks.css'
const AddBooks = () => {

    let formData = useRef()

    let handleSubmit = (e) => {
        e.preventDefault()
        // console.log(formData.current[0].value);
        let newBook = {
            title : formData.current[0].value,
            isbn :  formData.current[1].value,
            pageCount : formData.current[2].value,
            thumbnailUrl : formData.current[3].value,
            shortDescription : formData.current[4].value,
            longDescription : formData.current[5].value,
            status : formData.current[6].value,
            authors : formData.current[7].value,
            categories : formData.current[8].value
        }

        fetch('http://localhost:4000/books' , {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(newBook)
        })
        .then(() => alert(`${title}: Book added successfully`))
        .catch((err) => console.log(err));
    }
  return (
    <>
        <div className="addbooks">
            <div className="header">
                <h2>ADD New Books</h2>
            </div>

            <div className="container">
                <div className="form-box">
                    <form ref={formData} onSubmit={handleSubmit}>
                        <input type="text" placeholder='Enter Book Title'/>
                        <input type="text" placeholder='Enter Book Registration Number'/>
                        <input type="number" placeholder='Enter Page Count'/>
                        <input type="text" placeholder='Enter image url'/>
                        <input type="text" placeholder='Enter Short Description'/>
                        <input type="text" placeholder='Enter long Description'/>
                        <input type="text" placeholder='Enter Status'/>
                        <input type="text" placeholder='Enter Book Authors Name'/>
                        <input type="text" placeholder='Enter Categories'/>

                        <button type="submit" >
                            Add Book
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddBooks