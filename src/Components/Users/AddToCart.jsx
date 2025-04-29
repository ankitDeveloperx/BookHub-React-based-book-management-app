import React, { useState, useEffect } from 'react';
import '../../assets/styles/cart.css'; 

const AddToCart = () => {
    let [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Fetch the cart data from the API
        const fetchApi = async () => {
            let cartApi = await fetch('http://localhost:4000/cart');
            let resData = await cartApi.json();

            // Add quantity property if it's not in the response
            const updatedCartItems = resData.map(item => ({
                ...item,
                quantity: 1 // Default quantity is 1 if not present in API response
            }));

            setCartItems(updatedCartItems);
        };

        fetchApi();
    }, []);

    // Handle increment of quantity
    const handleIncrement = (id) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });

        setCartItems(updatedCartItems);
    };

    // Handle decrement of quantity
    const handleDecrement = (id) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === id) {
                const newQuantity = item.quantity - 1;
                if (newQuantity > 0) {
                    return { ...item, quantity: newQuantity };
                } else {
                    // Call API to delete item when quantity is 0
                    deleteItemFromCart(id);
                    return null; // This item should be removed from the state
                }
            }
            return item;
        }).filter(item => item !== null); // Filter out null items

        setCartItems(updatedCartItems);
    };

    // API call to remove item from the cart
    const deleteItemFromCart = async (id) => {
        await fetch(`http://localhost:4000/cart/${id}`, {
            method: 'DELETE',
        });

        // After successful deletion, update the cart items
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));

        // Optional: Show success alert
        alert('Item removed from cart successfully!');
    };

    return (
        <div className="cart">
            <div className="header">
                Cart
            </div>

            {cartItems.length === 0 ? (
                <h2>Your Cart is Empty 😕</h2>
            ) : (
                <div className="cart-container">
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Authors</th>
                                <th>Quantity</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map(({ id, title, thumbnailUrl, authors, quantity }) => (
                                <tr key={id}>
                                    <td><img src={thumbnailUrl} alt={title} className="cart-img" /></td>
                                    <td>{title}</td>
                                    <td>{authors.join(", ")}</td>
                                    <td>
                                        <div className="quantity-controls">
                                            <button onClick={() => handleDecrement(id)}>-</button>
                                            <span>{quantity}</span>
                                            <button onClick={() => handleIncrement(id)}>+</button>
                                        </div>
                                    </td>
                                    <td>
                                        <button 
                                            onClick={() => {
                                                if (window.confirm('Are you sure you want to remove this item?')) {
                                                    deleteItemFromCart(id);
                                                }
                                            }} 
                                            className="remove-btn"
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AddToCart;
