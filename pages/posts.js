import { MainLayout } from '../layouts/MainLayout'
import { PostComponent } from '../components/PostComponent'

export default function Posts () {
    return (
        <MainLayout title="Posts Page">
            <PostComponent />
            <PostComponent />
            <PostComponent />
            <PostComponent />
        </MainLayout>
    )
}