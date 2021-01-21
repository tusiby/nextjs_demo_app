import { useRouter } from 'next/router'
import { HeaderLayout } from '../../layouts/HeaderLayout'
import { MainLayout } from '../../layouts/MainLayout'
import PostDetails from '../../components/PostDetails'
import PostComponent from '../../components/PostComponent'

export default function Post({ res }) {
    // console.log(3333, res[0].relatedProducts)
    res[0].relatedProducts.map((item, index) => {
        console.log(3333, item)
    })

    const router = useRouter()
    return (
        <>
            <HeaderLayout title={`Post ${router.query.id}`} /> 
            <PostDetails
                image={res[0].image}
                name={res[0].name}
                description={res[0].description}
                price={res[0].price}
            />
            <div className="ralated">
                Related Figures
            </div>
            <MainLayout>
                {res[0].relatedProducts.length
                && res[0].relatedProducts.map((post, index) => <PostComponent post={post} key={index} />)}
            </MainLayout>
            <style jsx>{`
                .ralated {
                    font-family: Spartan;
                    font-weight: bold;
                    font-size: 44px;
                    margin 60px;
                    margin-bottom: 0;
                }

            `}</style>
        </>
    )
}

Post.getInitialProps = async ({ query }) => {
    const req = await fetch(`${process.env.API_URL}/posts?id=${query.id}`)
    const res = await req.json()
    return {
        res
    }
}