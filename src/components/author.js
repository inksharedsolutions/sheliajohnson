import React from 'react'
import AuthorImg from '../../static/author/dummy.png'

const Author = () => {
    return (
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                    <div className="grid-child" id="author-contents">

                        <p>
                            Shelia Johnson Peters Bio.

                            Born December 26, 1948 in Nassau, Bahamas, Shelia was the first of
                            seven kids by her mother Mary. As a child she was known to have a very
                            care-free nature and nothing seemed to bother her.
                            At the age of sixteen she met and fell deeply in love with a home town
                            boy named Erwin Johnson. 
                        </p>

                        <h1 className="author-name-tag">
                            <span>Shelia</span>
                            <span>Johnson</span>
                        </h1>

                        <span className="author-tagline">
                            Author & Writer
                        </span>

                    </div>

                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={AuthorImg} />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Author;