import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginSuccess } from './Redux/actions/CartActions';
import LandingPage from './Stores/Pages/LandingPage';
import MobilePage from './Stores/Pages/MobilePage';
import WatchesPage from './Stores/Pages/WatchesPage';
import ComputerPage from './Stores/Pages/ComputerPage';
import FridgePage from './Stores/Pages/FridgePage';
import BookPage from './Stores/Pages/BookPage';
import SignIn from './Stores/Components/Forms/SignIn';
import SignUp from './Stores/Components/Forms/SignUp';
import MobileSingle from './singles/MobileSingle';
import ComputerSingle from './singles/ComputerSingle';
import WatchSingle from './singles/WatchSingle';
import FridgeSingle from './singles/FridgeSingle';
import BookSingle from './singles/BookSingle';
import UserCart from './Stores/UserCart';
import ConfirmationPage from './Stores/Components/ConfirmationPage';

const App = ({ loginSuccess }) => {
  useEffect(() => {
    // Retrieve user details from session storage on app load
    const user = sessionStorage.getItem('user');
    if (user) {
      loginSuccess(JSON.parse(user));
    }
  }, [loginSuccess]);

  return (
    <div>
      
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/mobiles' element={<MobilePage />} />
        <Route path='/watches' element={<WatchesPage />} />
        <Route path='/computers' element={<ComputerPage />} />
        <Route path='/fridges' element={<FridgePage />} />
        <Route path='/books' element={<BookPage />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/mobiles/:id' element={<MobileSingle />} />
        <Route path='/computers/:id' element={<ComputerSingle />} />
        <Route path='/watches/:id' element={<WatchSingle />} />
        <Route path='/fridges/:id' element={<FridgeSingle />} />
        <Route path='/books/:id' element={<BookSingle />} />
        <Route path='/cart' element={<UserCart />} />
        <Route path='/confirmation' element={<ConfirmationPage />} />
      </Routes>
    </div>
  );
};

const mapDispatchToProps = {
  loginSuccess,
};

export default connect(null, mapDispatchToProps)(App);
