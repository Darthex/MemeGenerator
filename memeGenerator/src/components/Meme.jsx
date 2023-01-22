import React from "react"
import memeData from "../memeData"

export default function Meme() {

    const [formData, setFormData] = React.useState({
        topText: "",
        bottomText:""
    })
    function handleChange(event) {
        setFormData(prevData => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }


    const [memeImage, setMemeImage] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImage, setAllMemeImage] = React.useState(memeData)

    function getMemeImage() {
        const memeArray = allMemeImage.data.memes
        const RandomNumber = Math.floor(Math.random() * memeArray.length)
        const imageUrl = memeArray[RandomNumber].url
        // console.log(imageUrl)

        setMemeImage(function prevMemeImage() {
            return {
                ...prevMemeImage,
                randomImage: imageUrl
            }
        })
    }

    return(
        <main>
            <div className="form">
                <input type="text" className="form--inputs" placeholder="Top Text" name="topText" onChange={handleChange}/>
                <input type="text" className="form--inputs" placeholder="Bottom Text" name="bottomText" onChange={handleChange}/>
                <button 
                className="form--button"
                onClick={getMemeImage}
                >
                Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
            <img className="memeImage" src={memeImage.randomImage}/>
                <h2 className="meme--text top">{formData.topText}</h2>
                <h2 className="meme--text bottom">{formData.bottomText}</h2>
            </div>
        </main>
    )
}
