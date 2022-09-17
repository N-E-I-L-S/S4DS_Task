import React from 'react'
import AddImage from './AddImage';
import { useState, useEffect } from 'react';
import backgroundImage from "../BackgroundImage.jpg"

export default function Display() {

    const [Image, setImage] = useState([])
    const url = `http://shibe.online/api/shibes?count=50`;

    const fetchImage = async () => {
        const GetUrl = await fetch(url);
        const res = await GetUrl.json();
        setImage(res);
    }

    useEffect(() => {
        fetchImage();
    }, []);

    return (
        <>
            <div className="facecomp">
                <img style = {{position : 'fixed', height : '5rem', width : '5rem', zIndex : '1', borderRadius : '100%', bottom : '1vh', right : '1rem'}}src={require("../dogfacecompanion.jfif")} alt="Dog Face" />
            </div>
            <div style={{ backgroundImage : `url(${backgroundImage})` }} className="p-5 row">
                {Image.map((i) => {
                    return <div className="col-md-4">
                        <AddImage i={i} />
                    </div>
                })}
            </div>
        </>
    )
}
