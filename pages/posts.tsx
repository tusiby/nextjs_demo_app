import { HeaderLayout } from '../layouts/HeaderLayout'
import { MainLayout } from '../layouts/MainLayout'
import PostComponent from '../components/PostComponent'
import { IPost } from '../interfaces/Posts'
const R = require('ramda')

interface IPosts {
    res: IPost[]
}

export default function Posts ({ res } : IPosts) {
    const posts = R.map(post => R.omit(['description', 'relatedProducts'], post), res)
    return (
        <>
            <HeaderLayout title="Posts Page" />
            <section>
                <div className="section-title">Star Wars<br/>Figures</div>
                <div className="section-subtitle">Find the latest products for the biggest<br/>fans of the iconic saga.</div>
            </section>
            <MainLayout>
                {posts.length && posts.map((post, index) => {
                    return (
                        <PostComponent post={post} key={index} />
                    )
                })}
            </MainLayout>
            <style jsx>{`
                section {
                    margin-top: 100px;
                    text-align: center;
                    color: #000000;
                    margin-bottom: 100px;
                }

                .section-title {
                    font-family: Spartan;
                    font-weight: bold;
                    font-size: 82px;
                    text-align: center;
                }

                .section-subtitle {
                    font-family: Spartan;
                    font-weight: 600;
                    font-size: 28px;
                    text-align: center;
                    margin-top: 60px;
                }
            `}</style>
        </>
    )
}

Posts.getInitialProps = async () => {
    const req = await fetch(`${process.env.API_URL}/posts`)
    const res = await req.json()
    return {
        res
    }
}