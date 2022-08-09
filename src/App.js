// import './App.css'
import Nav from './components/Nav';
import React, {useEffect, useState} from 'react';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import {books} from './data'
import BookInfo from './pages/BookInfo';
import Cart from './pages/Cart';


function App() {
  const [cart,setCart ] = useState([])

function addToCart(book){
  setCart([...cart, book])
}


useEffect(() => {
  console.log(cart)
}, [cart])

  return (
    <Router>
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/books" element={ <Books books={books} />}/>
        <Route path="/books/:id"element={ <BookInfo books={books} addToCart={addToCart} />} />
        <Route path="/cart"element={ <Cart books={books} />} />
      </Routes>
      <Footer />


      
    </div>
    </Router>
  );
}

export default App;
