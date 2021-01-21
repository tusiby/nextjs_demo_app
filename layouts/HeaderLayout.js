import Head from 'next/head'
import Logo from '../public/images/Logo'

export function HeaderLayout({ children, title = "Main Page" }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <header><Logo /></header>
            <style jsx>{`
                header {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 80px;
                }
            `}</style>
        </>
    )
}