import React from "react";
import './images.css';
import Preloader from "../common/Preloader/Preloader";
import Card from "./Card/Card";



const Images = (props) => {

    if (!props.images) {
        return <Preloader />
    }

    return (
        <ul className='images' >
            {
                props.images.map((image) => {
                    return (
                        <Card key={image.id} image={image} />
                    );
                })
            }
        </ul>
    );
}

export default Images



/*
<li key={image.id} className='image__wrapper' >
    <Link to={`/image/${image.id}`} className='image__link'>
    <img className='image_img' src={image.urls.small} alt={image.alt_description}/>
</Link>
<div className='image__data'>
<div>{image.user.name}</div>
<div>{image.likes}</div>
</div>
</li>*/
