import React from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';

const Cart = ({ cartItems, removeFromCart }) => {

    const handleRemoveFromCart = (product) => {
        removeFromCart(product);
        window.alert("Item removed...");
    };

    return (
        <div>
            <h2>Cart</h2>
            {/* {cartItems.length} */}
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => handleRemoveFromCart(product)}>Remove</button>
                    </li>
                ))}
            </ul>
            
            
        </div>
    );
};

const mapStateToProps = (state) => ({
    cartItems: state.cartItems,
});

const mapDispatchToProps = {
    addToCart,
    removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);