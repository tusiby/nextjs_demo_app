import Image from 'next/image'

export default function PostDetails({...post}) {
    return (
        <>
            <div className="details-container">
                <div className="left-side">
                    <div className="image-container">
                        <Image
                            src={post.image}
                            alt="person_image"
                            width={500}
                            height={260}
                        />
                    </div>
                </div>
                <div className="right-side">
                    <div className="name">{post.name}</div>
                    <div className="description">{post.description}</div>
                    <div className="input-container">
                        <input className="order" placeholder="Email" />
                        <button>{`Preorder for $${post.price}`}</button>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .details-container {
                    box-sizing: border-box;
                    margin: 60px;
                    height: 600px;
                    padding: 40px;
                    background: #F1F0FF;
                    border-radius: 40px;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-gap: 20px;
                } 

                .details-container:hover {
                    cursor: pointer;
                    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                }
                
                .left-side {
                }

                .right-side {
                    padding-top: 100px;
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
                    text-transform: uppercase;
                    font-size: 32px;
                    color: #232329;
                    white-space: nowrap;
                }

                .description {
                    margin-top: 30px;
                    font-family: Spartan;
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 154%;
                }
                .input-container{
                    margin-top: 60px;
                    height: 65px;
                    position: relative;
                }

                .order {
                    background: #FCFCFC;
                    border: 2px solid #D6D8E7;
                    box-sizing: border-box;
                    border-radius: 72px;
                    height: 100%;
                    border: none;
                    outline: none;
                    padding: 0 30px;
                    width: 80%;
                    font-family: Spartan;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 24px;
                }

                button {
                    position: absolute;
                    top: 15px;
                    right: 25%;
                    padding: 11px 22px;
                    border: none;
                    background: black;
                    color: white;
                    border-radius: 50px;
                    cursor: pointer;
                    outline: none;
                    font-weight: bold;
                }

            `}</style>
        </>
    )
}