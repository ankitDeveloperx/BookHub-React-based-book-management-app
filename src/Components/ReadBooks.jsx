import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import '../assets/styles/readBooks.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';

const ReadBooks = () => {
    let params = useParams()
    let bookId = params.id
    let [singleBook, setSingleBook] = useState({})
    let [showDescription, setShowDescription] = useState(false)
    let loc = useLocation()
    let pathBool = loc.pathname.startsWith('/adminPortal')
    let [cartMessage, setCartMessage] = useState("")


    let fetchBook = async () => {
        let resApi = await fetch(`http://localhost:4000/books/${bookId}`)
        let book = await resApi.json()
        setSingleBook(book)
    }
    fetchBook()
    // console.log(singleBook);
    const {
        title,
        isbn,
        pageCount,
        publishedDate,
        thumbnailUrl,
        shortDescription,
        status,
        longDescription,
        authors = [],
        categories = []
    } = singleBook

    // // Limit to first 150 characters or less, safely handle if longDescription is missing
    // const shortDescription = longDescription ? longDescription.substring(0, 150) + '...' : '';
    let navigate = useNavigate()
    let backBtn = () => {
        pathBool
            ?
            navigate('/adminPortal/books')
            :
            navigate('/userPortal/books')
    }

    let addToCart = () => {
        let cartBool = window.confirm("do you want to add this book to the cart ....")
        cartBool
            ?
            fetch('http://localhost:4000/cart', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(singleBook)
            })
            .then(res => res.ok
                ? alert("Book added to cart successfully!")
                : alert("Failed to add book to cart.")
            )
            .catch(() => alert("Error occurred while adding to cart."))
            :
            alert("This Book is not added to the Cart")
    }

    return (
        <>
            <div className="readBook">
                <div className="header">
                    <h1>{title}</h1>
                </div>

                <div className="container">
                    <div className="book-card">
                        {/* Book Image */}
                        <div className="book-image">
                            <img src={thumbnailUrl} alt="Book Cover" />
                        </div>

                        {/* Book Details */}
                        <div className="book-info">
                            <p><strong>ISBN:</strong> {isbn}</p>
                            <p><strong>Pages:</strong> {pageCount}</p>
                            <p><strong>Published Date:</strong> {publishedDate?.$date?.substring(0, 10)}</p>
                            <p><strong>Authors:</strong> {authors}</p>
                            <p><strong>Category:</strong> {categories}</p>
                            <p><strong>Status:</strong> {status}</p>
                            <p><strong>Short Description:</strong> {shortDescription}</p>


                            <div className="book-description">
                                <div
                                    className="toggle"
                                    onClick={() => setShowDescription(!showDescription)}
                                >
                                    <span><strong>Full Description</strong></span>
                                    <span className="icon">{showDescription ? '−' : '+'}</span>
                                </div>
                                <p className="desc">
                                    {showDescription ? longDescription : ""}
                                </p>
                            </div>

                            <div className="action-buttons">
                                <button onClick={backBtn} className="back-btn"> <ReplyAllIcon/> Back</button>
                                <button onClick={addToCart} className="add-to-cart-btn"> <AddShoppingCartIcon/> Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReadBooks
