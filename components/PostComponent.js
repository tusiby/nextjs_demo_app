import Image from 'next/image'

export default function PostComponent({ post }) {
    return (
        <>
            <div className="post-container" onClick={() => window.location.assign(`/post/${post.id}`)} >
                <div className="image-container">
                    <Image
                        src={post.image}
                        alt="person_image"
                        width={240}
                        height={200}
                    />
                </div>
                <div className="data">
                    <div className="name">{post.name}</div>
                    <div className="description">{post.shortDescription}</div>
                    <button>{`Buy $${post.price}`}</button>
                </div>    
            </div>
            <style jsx>{`
                .post-container {
                    width: 100%;
                    box-sizing: border-box;
                    border-radius: 40px;
                    padding: 40px;
                    background: #F1F0FF;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: auto auto;
                    grid-gap: 10px;
                }

                .post-container:hover {
                    cursor: pointer;
                    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                }

                .image-container {
                    width: 100%;
                    height: 100%;
                    margin-left: auto;
                    margin-right: auto;
                    display: flex;
                    justify-content: center;
                }

                .name {
                    margin-top: 20px;
                    font-family: Spartan;
                    font-weight: 700;
                    font-size: 32px;
                    text-align: center;
                    color: #232329;
                    white-space: nowrap;
                }

                .description {
                    margin-top: 20px;
                    font-family: Spartan;
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 154%;
                    text-align: center;
                }

                button {
                    margin-top: 30px;
                    margin-left: auto;
                    margin-right: auto;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 11px 22px;
                    border: none;
                    background: black;
                    color: white;
                    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.32);
                    border-radius: 50px;
                    cursor: pointer;
                    outline: none;
                    font-weight: bold;
                }
            `}</style>
        </>
    )
}