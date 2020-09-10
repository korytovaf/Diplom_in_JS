import React from "react";
import './photos.css';
import Preloader from "../common/Preloader/Preloader";
import Card from "./Card/Card";


const Photos = (props) => {

    if (!props.images) {
        return <Preloader/>
    }

    return (
        <div className='photos__wrapper'>
            <ul className='photos'>

                {
                    props.images.map((image) => {
                        return (
                            <Card key={image.id} image={image} token={props.token}/>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default Photos
