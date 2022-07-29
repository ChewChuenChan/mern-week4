import React from 'react'
import { useParams } from 'react-router-dom';
import {
    Link 
    } from "react-router-dom";

const Word = (props) => {
    const { word,color,bgCol } = useParams()

    return (
        <div className="text-center mt-5">
            {
                isNaN(word)?
                <div  style={color?
                {color:color, backgroundColor:bgCol}:
                null}>
                    <h1 className="display-3 ">This is a word: {word}</h1>
                </div>:
                <div>
                    <h1 className="display-3 ">This is a number: {word}</h1>
                </div>
            }
            <Link to={"/"}>Go to Home </Link>
        </div>
    );
    }

export default Word