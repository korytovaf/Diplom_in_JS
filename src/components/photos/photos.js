import React, {useContext} from "react";
import './photos.css';
import Preloader from "../common/Preloader/Preloader";
import Card from "./Card/Card";
import {PhotosContext} from "../../context/photos/photosReducer";


const Photos = () => {

    const {state} = useContext(PhotosContext);

    if (!state.images) {
        return <Preloader/>
    }

    return (
        <div className='photos__wrapper'>
            <ul className='photos'>
                {
                    state.images.map((image) => {
                        return (
                            <Card key={image.id} image={image}/>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default Photos
