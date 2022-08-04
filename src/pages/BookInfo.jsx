import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link,useParams } from 'react-router-dom';
import Price from '../components/ui/Price';
import Rating from '../components/ui/Rating';



const BookInfo = ({books}) => {
   const {id} = useParams()
   const book = books.find(book => book.id === id )
   console.log(book)

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
                                <img src="https://covers.openlibrary.org/b/id/8091016-L.jpg" alt="" className="book__selected--img" />
                            </figure>
                            <div className="book__selected--description">
                                <h2 className="book__selected--title">
                                    Crack the coding interview
                                </h2>
                                <Rating rating="4.5" />
                                <div className="book__selected--price">
                                    <Price originalPrice={50} salePrice={null} />

                                </div>
                                <div className="book__summary">
                                    <div className="book__summary--title">
                                        Summary
                                    </div>
                                    <p className="book__summary__para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                         Corporis perferendis soluta nihil cum dolores eos omnis debitis ipsam expedita nulla. 
                                         Saepe quae aliquid esse minima corrupti aut qui at ab!
                                    </p>
                                    <p className="book__summary__para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                         Corporis perferendis soluta nihil cum dolores eos omnis debitis ipsam expedita nulla. 
                                         Saepe quae aliquid esse minima corrupti aut qui at ab!
                                    </p>
                                </div>
                                <button className="btn">
                                    Add to Cart
                                </button>
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
                    </div>
                </div>
            </main>
            
        </div>
    );
}

export default BookInfo;
