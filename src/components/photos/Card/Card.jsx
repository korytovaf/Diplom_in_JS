import React from "react";
import "./Card.css"
import Heart from "../../../img/Hart";
import {Link} from "react-router-dom";

const Card = (props) => {
    return (
        <li className='card'>
            <Link to={`/image/${props.image.id}`} >
                <span className='card__link'></span>
            </Link>
                <img src={props.image.urls.small} alt={props.image.alt_description}/>

                <div className='card__content'>

                    <h3 className='card__name'>{props.image.user.name}</h3>

                    <div className='card__like'>
                        <Heart width={16} height={14} fill={props.image.liked_by_user ? 'red': 'white'}/>
                        <span>{props.image.likes}</span>
                    </div>
                </div>
        </li>
    );
}

export default Card
