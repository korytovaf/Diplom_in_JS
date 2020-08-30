import React from "react";
import './header.css';
import {Link} from "react-router-dom";

const Header = (props) => {

    return (
        <header className='header'>

            <div>
                {
                    props.profileMi
                        ? <div>
                            <img src={props.profileMi.profile_image.small} alt={props.profileMi.name}/>
                            <div>{props.profileMi.first_name}</div>
                        </div>
                        : <button onClick={props.getAuthentication} className='button'>Вход</button>
                }

            </div>
            <Link to='/'>Home</Link>
        </header>
    );
}

export default Header