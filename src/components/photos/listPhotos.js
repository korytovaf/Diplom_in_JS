import React from "react";
import './ListPhotos.css';
import Preloader from "../common/Preloader/Preloader";
import Card from "./Card/Card";


const ListPhotos = (props) => {

    if (!props.images) {
        return <Preloader/>
    }

    return (
        <div className='images__wrapper'>
            <ul className='images'>

                {
                    props.images.map((image) => {
                        return (
                            <Card key={image.id} image={image} token={props.token}/>
                        );
                    })
                }
            </ul>
            <button className='images__add' onClick={props.addPage}>Add</button>
        </div>
    );
}

export default ListPhotos
