export function MainLayout({ children, title = "Main Page" }) {
    return (
        <>
            <main>
                {children}
            </main>
            <style jsx>{`
                main {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-column-gap: 24px;
                    grid-row-gap: 48px;
                    padding: 60px;
                }
                @media (max-width: 1024px) {
                    main {
                        grid-template-columns: 1fr 1fr;
                        padding: 30px;
                    }
                }
                @media (max-width: 640px) {
                    main {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </>
    )
}