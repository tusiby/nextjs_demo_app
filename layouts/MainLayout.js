import Head from 'next/head'

export function MainLayout({ children, title = "Main Page" }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <header>Header Works!!!!</header>
            <main>{ children }</main>
        </>
    )
}