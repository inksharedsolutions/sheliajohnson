import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'

import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/main_author.jpg'
import { Helmet } from "react-helmet"

const ATB = (props) => {

    return (
        <>
            <Layout>
            <Helmet title="Abou the Author | Shelia Johnson"/>
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Author`} />

                <div className="container">
                    <section className="body-author-contents columns">
                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img
                                    src={AuthorImg}
                                    alt="_main_author" />
                            </div>

                            <div className="heading-quote">
                                <h4>

                                </h4>
                                <span className="ata-span-fx">
                                    {/* author quote */}
                                </span>
                            </div>
                        </div>

                        <article className="article-section column" id="author">
                            <p>
                            Born December 26, 1948 in Nassau, Bahamas, Shelia was the first of
                            seven kids by her mother Mary. As a child she was known to have a very
                            care-free nature and nothing seemed to bother her.
                            </p>

                            <p>
                            At the age of sixteen she met and fell deeply in love with a home town
                            boy named Erwin Johnson. The couple soon wed and from their union
                            produced eight children; five girls and three boys. The marriage was
                            tumultuous and unfulfilling for Shelia. Her escape was her faith and her
                            children of whom she devoted her life to. No matter how difficult, she
                            found time to engage with her children in prayer, bible study and church
                            services; however after nineteen years and unable to endure any longer,
                            Shelia made the life-changing decision to end her marriage. She didn’t
                            leave empty handed however; without knowing how she’d survive she left
                            with all eight children for a new beginning in the United States. The year
                            was 1982.
                            </p>

                            <p>
                            The next few years proved to be as expected; extremely difficult but
                            she had the help of her brother and sisters. They lovingly supported her by
                            opening their homes for her and her eight children. Shelia soon found a
                            church where she and her children would attend and soon after they
                            joined as members. Shelia was well on her way to achieving the American
                            Dream but she’d have to overcome some major obstacles first.
                            </p>

                            <p>
                            Now that the kids were settled in with her siblings it was time for
                            Shelia to focus so she took a few odds and ends jobs and was able to send
                            her daughters to college. This brought her so much joy but desperately
                            wanting to better provide for all her children and have them all under one
                            roof, Shelia knew she needed to take drastic measures. She soon enrolled
                            in school to get her GED and for a period of time she held three jobs and
                            never complained for she had a goal in sight. 
                            </p>

                            <p>
                            The years swept by and within four years after her arrival to the U.S.
                            Shelia had her four oldest children (all girls) in college. Somehow she knew
                            she still hadn’t arrived and there was still more to be done. So she
                            continued on her path but never forgetting the one thing that kept her,
                            her unwavering faith in God. Though at times she felt she couldn’t endure
                            anymore and wondered how long, she persevered knowing he would never
                            leave or forsake her.
                            </p>

                            <p>
                            She continued on and eventually secured employment in Dade County
                            Public School System. It is here that she made the decision to earn the
                            degree of Bachelor of Science in Elementary Education. Her years in the
                            school system afforded her the opportunity of meeting many people as she
                            was transferred from school to school. Her positive personality and
                            penchant for helping others was known wherever she went and as a result
                            she was called upon often for support but mostly for prayers.
                            </p>

                            <p>
                            Twenty plus years later and the young island girl has now become a
                            US citizen, the Author of a book title “8 Kids and 2 Suitcases” the proud
                            grandmother of seventeen grandchildren, one great grandchild four sonsin-law and one daughter-in-law. Although many things have changed
                            throughout the years two things remain constant; her unwavering faith
                            in God and her devotion to her children. Her strong faith and “don’t
                            quit” attitude is deeply imbedded in her children and is evident
                            today. Shelia takes pride in knowing that her five daughters have earned
                            a masters degree, two sons have earned bachelor degrees and one son is
                            proudly serving his country as a US Marine. To her family she is a living
                            legend and considered the glue that holds them all together, Shelia is
                            happily married to Mr. Jerry Peters.
                            </p>

                            <p>
                            The next chapters of her life…. well stay tuned, but we know
                            whatever it is that she wishes for she will no doubt accomplish it and
                            more. 
                            </p>



                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">Shelia Johnson</span>
                                </span>
                            </p>

                        </article>
                    </section>
                </div>

            </Layout>
        </>
    )
}


export default ATB;