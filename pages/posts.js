import { MainLayout } from '../layouts/MainLayout'
import { PostComponent } from '../components/PostComponent'

export default function Posts ({ res }) {
    return (
        <MainLayout title="Posts Page">
            {res.length && res.map((post, index) => <PostComponent post={post} key={index}/>)}
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