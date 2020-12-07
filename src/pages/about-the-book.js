import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/books/main_book.png'


const ATB = (props) => {

    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'shelia-johnson',
        config: { identifier: 12, slug }
    }


    return (
        <>
            <Layout>
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div
                        className="container"
                        id="book-containers" >

                        <BookInfo
                            data={{
                                title: `What if she knew she was powerful `,
                                spanFirst: `A real life superwoman`,
                                imgSrc: Book1,
                                id: '',
                                content:
                                    `
                                        <p>
                                        This biography brings to light the suffering and abuse of a woman who has endured much. It serves as an encouragement to many women across the globe who are presently suffering abuse in their relationships, as well as a cautionary tale for others to take steps to avoid such abusive situations. This is a must-read book written in a time where many of the abused can find solace and others can get guidance and seek help in finding the right mate. It’s an awesome read.
                                        </p> 

                                        <p>
                                        She didn’t quit. She didn’t give up. She didn’t stop. She didn’t succumb. She stumbled, she fell, but she picked herself up and kept going until she persevered and succeeded pulling behind all who are associated with her. Shelia L. Johnson Peters has “true grit,” a “crown of many stars,” and an unfinished story. 
                                        </p>

                                    `,

                                ebooks: {
                                    stratton: 'https://www.stratton-press.com/books/what-if-she-knew-she-was-powerful-a-real-life-superwoman/',
                                    barnes: 'https://www.barnesandnoble.com/w/what-if-she-knew-she-was-powerful-shelia-lenora-johnson-peters/1136605831?ean=9781643459226',
                                    amazon: 'https://www.amazon.com/dp/B085KC8H22/ref=sr_1_1?keywords=9781643459226&qid=1583539565&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/dp/164345921X/ref=sr_1_1?keywords=9781643459219&qid=1583539590&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/what-if-she-knew-she-was-powerful-shelia-lenora-johnson-peters/1136605831?ean=9781643459219',
                                    booksamillion: 'https://www.booksamillion.com/p/What-If-She-Knew-Was/Shelia-Lenora-Johnson-Peters/9781643459219?id=8049069540563&_ga=2.130397770.411042605.1607341099-2145380449.1604906972#',
                                }
                            }}
                        />



                        <div className="commentSection">
                            <div id="disqus_thread">
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                        </div>
                    </div>
                </main>


            </Layout>
        </>
    )
}


export default ATB;