import React from "react";
import './photo.css'
import Preloader from "../common/Preloader/Preloader";
import Heart from "../../img/heart";
import Alert from "../common/alert/alert";

const Photo = ({image, photoId, likedClick, unlikeClick, err}) => {

    if (!image || photoId !== image.id) {
        return <Preloader/>
    }
    return (
        <>
            {err && <Alert />}
            <div className='photo'>
                <img src={image.urls.regular} alt={image.alt_desckription}/>
                <div className='photo__content'>
                    <h3 className='photo__name'>{image.user.name}</h3>
                    <div onClick={!image.liked_by_user ? likedClick : unlikeClick} className='photo__like'>
                        <Heart width={20} height={18} fill={image.liked_by_user ? 'red' : 'gainsboro'}/>
                        <span>{image.likes}</span>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Photo

