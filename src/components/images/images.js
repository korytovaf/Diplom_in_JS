import React from "react";
import './images.css';
import {Link} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";



const Images = (props) => {

    if (!props.images) {
        return <Preloader />
    }

    return (
        <ul className='images' >
            {
                props.images.map((image) => {
                    return (
                        <li key={image.id} className='imgWrapper' >
                            <Link to={`/image/${image.id}`} className='img__link'>
                                    <img className='img' src={image.urls.small} alt={image.alt_description}/>
                            </Link>
                        </li>

                    );
                })
            }
        </ul>
    );
}

export default Images