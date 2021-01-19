import { useRouter } from 'next/router'
import { MainLayout } from '../../layouts/MainLayout'

export default function Post() {
    const router = useRouter()
    return (
        <MainLayout title={`Post ${router.query.id}`}> 
            <h1>{router.query.id}</h1>
        </MainLayout>
    )
}