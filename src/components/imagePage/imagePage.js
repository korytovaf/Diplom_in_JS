import React from "react";
import './imagePage.css'
import Preloader from "../common/Preloader/Preloader";

const ImagePage = (props) => {

    if (!props.image || props.itemId !== props.image.id) {
        return <Preloader />
    }
    return (
        <div className='image'>
            <img className='img' src={props.image.urls.regular} alt={props.image.alt_desckription}/>
        </div>
    );
}
export default ImagePage