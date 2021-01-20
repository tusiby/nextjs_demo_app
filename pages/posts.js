import { MainLayout } from '../layouts/MainLayout'
import { PostComponent } from '../components/PostComponent'
const R = require('ramda')

export default function Posts ({ res }) {
    const posts = R.map(post => R.omit(['description', 'relatedProducts'], post), res)
    return (
        <MainLayout title="Posts Page">
            {posts.length && posts.map((post, index) => {
                return (
                    <PostComponent post={post} key={index} />
                )
            })}
        </MainLayout>
    )
}

const ctx = {
    pathname: '/posts'
}

Posts.getInitialProps = async ({ ctx, pathname }) => {
    const query = await fetch(`${process.env.API_URL}${pathname}`)
    const res = await query.json()
    return {
        res
    }
}