import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../Redux/actions/CartActions';
import { Link } from 'react-router-dom';


const UserCart = ({ cartItems, removeFromCart, increaseQuantity, decreaseQuantity}) => {
    
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + parseInt(item.price)* item.quantity, 0);
    };

    const handleRemoveFromCart = (product) => {
        removeFromCart(product);
        window.alert("Removing item from the cart!");
    };

    return (
        <div>
            <h1 className='Qty'>Number of Items Added to the cart: {cartItems.length}</h1>
            <p className='total-price'>Total Price: ${getTotalPrice()}</p>

            {cartItems.map((item) => (
                <div className="cart-section" key={item.id}>
                    <div className="cart-img">
                        <img src={item.image} alt='' />
                    </div>
                    <div className="cart-details">
                        <h3>{item.title}</h3>
                        <h2>{item.price}</h2>
                        <h3>{item.model}</h3>
                    </div>
                    <div className="quantity-controls">
                            <button onClick={() => decreaseQuantity(item.id)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => increaseQuantity(item.id)}>+</button>
                    </div>
                    <button className='remove-button' onClick={() => handleRemoveFromCart(item)}>Remove</button>
                </div>
            ))}
            <div className='styled-button'>
            
                <Link to='/'><button >Back to home</button></Link>
                <Link to='/confirmation' ><button >Proceed</button></Link>
            </div>
            
            
        </div>
    );
};

const mapStateToProps = (state) => ({
    cartItems: state.cart.cartItems,
});

const mapDispatchToProps = {
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCart);
