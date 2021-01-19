import Head from 'next/head'
import Logo from '../images/Logo'

export function MainLayout({ children, title = "Main Page" }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className="container">
                <header><Logo /></header>
                <main>{ children }</main>
            </div>
            <style jsx>{`
                .container {
                    display: grid;
                    grid-template-rows: 80px 1fr;
                    height: 100vh;
                }

                header {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                }

                main {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-column-gap: 24px;
                    grid-row-gap: 48px;
                    padding: 60px;
                }
                @media (max-width: 980px) {
                    main {
                        grid-template-columns: 1fr 1fr;
                    }
                }
                @media (max-width: 360px) {
                    main {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </>
    )
}