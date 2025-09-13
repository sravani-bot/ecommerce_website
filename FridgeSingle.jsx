import React from 'react';
import { fridgeData } from '../Stores/data/Fridge';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import NavBar from '../Stores/Components/NavBar';
import { addToCart } from '../Redux/actions/CartActions';
import { connect } from 'react-redux';

const FridgeSingle = ({ isAuthenticated, addToCart }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams();
    const product = fridgeData.find((item) => item.id === id);

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleAddToCart = (product) => {
        if (isAuthenticated) {
            addToCart(product);
            window.alert('Item added successfully!');
        } else {
            navigate('/signin', { state: { from: location } });
        }
    };

    return (
        <>
            <NavBar />
            <div className="ind-section">
                <div className="ind-image">
                    <img src={product.image} alt={product.model} />
                </div>
                <div className="ind-details space">
                    <div className="ind-model space">
                        <h3>{product.model}</h3>
                    </div>
                    <div className="ind-price space">
                        <h2>{product.price}</h2>
                    </div>
                    <div className="ind-desc space">
                        <p>{product.description}</p>
                    </div>
                    <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {
    addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(FridgeSingle);
