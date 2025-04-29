import React, { useState } from 'react'
import '../assets/styles/books.css'
import { useLocation, useNavigate } from 'react-router-dom'

const Books = () => {
    let [books , setBooks] = useState([])
    let navigate = useNavigate()
    let location = useLocation()
    let bool = location.pathname.startsWith('/adminPortal')

    let fetchApi = async () => {
        let booksApi = await fetch('http://localhost:4000/books')
        let resData = await booksApi.json()
        setBooks(resData);
    }
    fetchApi()
    // console.log(books);

    let readBook = (id) => {
        // alert('Book id : '+id)
        bool 
        ?
        navigate(`/adminPortal/readbook/${id}`)
        : 
        navigate(`/userPortal/readbook/${id}`)

    }

    // let deleteBook = (e,id) => {
    //     e.preventDefault();
    //     let filtered = books.filter((book) => book.id !== id)
    //     setBooks(filtered)
    // }

    let deleteBook = (id , title) =>{
        let bool = window.confirm(`Do you want to Delete ${title} book`)
        if(bool){
            fetch(`http://localhost:4000/books/${id}` , {method : 'DELETE'})
            alert(`${title} : Book is deleted Successfully`)
        }
        else{
            alert(`${title} : Book is not deleted Successfully`)
        }
    }

//   let handleAddToCart = (book) => {
//     let currentCart = JSON.parse(localStorage.getItem('cart')) || [];
//     let index = currentCart.findIndex(item => item.id === book.id);

//     if (index !== -1) {
//       currentCart[index].quantity += 1;
//     } else {
//       currentCart.push({ ...book, quantity: 1 });
//     }

//     localStorage.setItem('cart', JSON.stringify(currentCart));
//     alert(`${book.title} added to cart`);
//     };




  return (
    <>
        <div className="books">
            <div className="header">
                <h1>Books</h1>
            </div>
            <div className="container">
                {
                    books.map((elem) => {
                        let {id ,title,thumbnailUrl,authors} = elem
                        return(
                            <>
                                <div className="card">
                                    <div className="image">
                                        <img src={thumbnailUrl} alt="No image" />
                                    </div>
                                    <div className="title">{title}</div>
                                    <div className="authors">({authors})</div>
                                    <div className="btns">
                                        <button className='read' onClick={() => readBook(id)}>Read</button>
                                        {
                                            bool
                                            ?
                                            <button className='dlt' onClick={() => deleteBook(id ,title)}>Delete</button>
                                            :
                                            // <button className='cart-btn' onClick={() => handleAddToCart(elem)}>Add to Cart</button>
                                            <></>
                                        }
                                    </div>
                                </div>
                            </>
                        )
                    })

                }
            </div>
        </div>
    </>
  )
}

export default Books