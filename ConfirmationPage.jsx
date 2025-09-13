import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ConfirmationPage = ({ cartItems }) => {
  return (
    <div className='confirmation-container'>
      {cartItems.length === 0 ? (
        <h2 className='oops-page'>Please add something to the cart</h2>
      ) : (
        <>
          <h3 className='thanks-page'>Thanks for Shopping!</h3>
          <h4 className='confirmation'>Your order has been placed successfully!</h4>
        </>
      )}

      <Link to='/'>
        <button className='styled-button'>Back To Home</button>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps)(ConfirmationPage);
