import Image from 'next/image'
import { useRouter } from 'next/router'

export function PostComponent({ post }) {
    const router = useRouter()

    return (
        <div className="post-container" onClick={() => window.location.assign(`/post/${post.id}`)} >
            <Image
                src={post.image}
                alt="person_image"
                width="200px" 
                height="0"
            />
            <div className="data">
                <div className="name">{post.name}</div>
                <div className="description">{post.shortDescription}</div>
                <button>{`Buy $${post.price}`}</button>
            </div>
            <style jsx>{`
                .post-container {
                    height: 520px;
                    width: 100%;
                    box-sizing: border-box;
                    border-radius: 40px;
                    padding: 40px;
                    background: #F1F0FF;
                    display: grid;
                    grid-template-rows: 1fr 180px;
                    grid-gap: 20px;
                    grid-template-columns: 1fr;
                }

                .post-container:hover {
                    cursor: pointer;
                    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                }

                .data {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .name {
                    font-family: Spartan;
                    font-weight: 700;
                    font-size: 32px;
                    text-align: center;
                    color: #232329;
                }

                .description {
                    margin-top: 15px;
                    font-family: Spartan;
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 154%;
                    text-align: center;
                }

                button {
                    margin-top: 20px;
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
        </div>
    )
}