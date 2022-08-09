import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState}from 'react';
import { Link,useParams } from 'react-router-dom';
import Book from '../components/ui/Book';
import Price from '../components/ui/Price';
import Rating from '../components/ui/Rating';
import Cart from './Cart';



const BookInfo = ({books, addToCart}) => {
   const {id} = useParams()
   const book = books.find(book => +book.id === +id )
//    const [added, setAdded] = useState(false)
 
   function addBookToCart(book){
    addToCart(book)

   }

   function bookExistsOnCart(){
    return Cart.find(book => book.id === +id)
   }

    return (
        <div id='books__body'>
            <main id='books__main'>
                <div className="books__container">
                    <div className="row">
                        <div className="books__selected--top">
                            <Link to= "/books" className="books_link">
                                <FontAwesomeIcon icon="arrow-left" />
                            </Link>
                            <Link to="/books" className="books_link">
                                <h2 className='book__selceted--title--top'>
                                    Books
                                </h2>
                            </Link>
                        </div>
                        <div className="book__selected">
                            <figure className="book__slected--figure">
                                <img 
                                src={book.url} 
                                alt="" 
                                className="book__selected--img" />
                            </figure>
                            <div className="book__selected--description">
                                <h2 className="book__selected--title">
                                    {book.title}
                                </h2>
                                <Rating rating={book.rating}/>
                                <div className="book__selected--price">
                                    <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />

                                </div>
                                <div className="book__summary">
                                    <h3 className="book__summary--title">
                                        Summary
                                    </h3>
                                    <p className="book__summary--para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                         Corporis perferendis soluta nihil cum dolores eos omnis debitis ipsam expedita nulla. 
                                         Saepe quae aliquid esse minima corrupti aut qui at ab!
                                    </p>
                                    <p className="book__summary--para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                         Corporis perferendis soluta nihil cum dolores eos omnis debitis ipsam expedita nulla. 
                                         Saepe quae aliquid esse minima corrupti aut qui at ab!
                                    </p>
                                </div>
                                {bookExistsOnCart() ? ( 
                                <button className='btn'>Checkout</button>
                                ):(
                                <button className="btn" onClick={() => addBookToCart}>
                                    Add to Cart
                                </button>
                                  )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="book__selected--title--top">
                                Recommended Books
                            </h2>
                        </div>
                        <div className="books">

                        {
                            books
                            .filter((book) =>book.rating === 5 && +book.id !== +id)
                            .slice(0, 4)
                            .map(book => <Book book ={book} key={book.id} />)
                        }
                        </div>
                    </div>
                </div>
            </main>
            
        </div>
    );
}

export default BookInfo;
