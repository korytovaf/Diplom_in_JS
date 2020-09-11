import React from "react";
import './header.css';
import {Link} from "react-router-dom";

const Header = (props) => {

    return (
        <header className='header'>
            <div className='menu'>
                <Link to='/'>Home</Link>
                { props.profileMi && <Link to='/profile'>Профиль</Link> }
            </div>

            <div className='header_avatar'>
                {
                    props.profileMi
                        ? <>
                            <img src={props.profileMi.profile_image.small} alt={props.profileMi.name}/>
                            <div>{props.profileMi.first_name}</div>
                        </>
                        : <button onClick={props.getAuthentication} className='button'>Вход</button>
                }
            </div>

        </header>
    );
}

export default Header