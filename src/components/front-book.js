import React from 'react'
import { Link } from 'gatsby'
import FrontBook from '../../static/books/main_book.png'
// import Accordions from '../containers/accordions'

const MidBook = (props) => {
    return (
        <>
            <section className="upper-main">
                <div className="container-gt separator-line">

                    <div className="grid-two-columns" id="wrapper-two-books">

                        <div className="book-wraps">
                            <img src={FrontBook} />
                        </div>

                        <div className="content-wraps">

                            <span className="italic-tag">
                                Read, listen, and learn in various formats
                            </span>

                            <h1 className="heading--featured">
                                <span>Featured</span>
                                <span>Book</span>
                            </h1>

                            <p>
                            This biography brings to light the suffering and abuse of a woman who has endured much. It serves as an encouragement to many women across the globe who are presently suffering abuse in their relationships, as well as a cautionary tale for others to take steps to avoid such abusive situations. This is a must-read book written in a time where many of the abused can find solace and others can get guidance and seek help in finding the right mate. It’s an awesome read.
                            </p>

                            <button className="btn-book-featured">
                                <Link to="/about-the-book">
                                    Read More
                                </Link>
                            </button>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MidBook