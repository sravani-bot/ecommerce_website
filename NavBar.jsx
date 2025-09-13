import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../Redux/actions/CartActions';

const NavBar = ({ cartItemCount, user, onSearch, logout }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        if (onSearch) {
            onSearch(term);
        }
    };

    const handleLogout = () => {
        // Clear user session
        sessionStorage.removeItem('user');
        // Dispatch logout action
        logout();
    };

    return (
        <>
            <div className="navSection">
                <div className="title">
                    <Link to='/'><h1>E-mart</h1></Link>
                </div>
                <div className="search">
                    <input
                        type="text"
                        placeholder="Search for products"
                        value={searchTerm}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="user">
                    {user ? (
                        <>
                            <div className='user-detail'>
                                <span>{user.email}</span>
                            </div>
                            <div className='user-detail'>
                                <button onClick={handleLogout} >Logout</button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='user-detail'>
                                <Link to="/signin">SignIn</Link>
                            </div>
                            <span>/</span>
                            <div className='user-detail'>
                                <Link to="/signup">SignUp</Link>
                            </div>
                        </>
                    )}
                    <Link to='/cart'>
                        <div className="cart">
                            <i className="fas fa-shopping-cart"></i>
                            <span id="cart-count">{cartItemCount}</span>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="subMenu">
                <ul>
                    <Link to='/mobiles'><li>Mobile</li></Link>
                    <Link to='/watches'><li>Watches</li></Link>
                    <Link to='/computers'><li>Computers</li></Link>
                    <Link to='/fridges'><li>Fridges</li></Link>
                    <Link to='/books'><li>Books</li></Link>
                </ul>
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    cartItemCount: state.cart.cartItems.length,
    user: state.auth.user, // Retrieve the user from the Redux state
});

const mapDispatchToProps = {
    logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
