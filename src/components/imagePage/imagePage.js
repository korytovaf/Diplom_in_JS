import React from "react";
import './Photo.css'
import Preloader from "../common/Preloader/Preloader";
import Heart from "../photos/Card/Hart";

const ImagePage = (props) => {

    if (!props.image || props.photoId !== props.image.id) {
        return <Preloader />
    }
    return (
        <div className='photo'>
            <img src={props.image.urls.regular} alt={props.image.alt_desckription}/>
            <div className='photo__content'>
                <h3 className='photo__name'>{props.image.user.name}</h3>
                <div onClick={props.likedClick} className='photo__like'>
                    <Heart width={20} height={18} fill={props.image.liked_by_user ? 'red': 'transparent'}/>
                    <span>{props.image.likes}</span>
                </div>
            </div>
        </div>
    );
}
export default ImagePage

