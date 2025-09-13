import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../Redux/actions/CartActions';
import { useNavigate } from 'react-router-dom';

const ProductItem = ({ product, isAuthenticated, addToCart }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      navigate('/signin');
      return;
    }
    addToCart(product);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

// Map state to props
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

// Map dispatch to props
const mapDispatchToProps = {
  addToCart,
};

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);