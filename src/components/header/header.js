import React from "react";
import './header.css';
import {Link} from "react-router-dom";

const Header = ({profileMi, clickMenuAvatar, classNames, getAuthentication, setLogout}) => {

    return (
        <header className='header'>
            <div className='menu'>
                <Link to='/'>Home</Link>
                { profileMi && <Link to='/profile'>Профиль</Link> }
            </div>

            <div className='header_avatar'>
                {
                    profileMi
                        ? <>
                            <img onClick={clickMenuAvatar} src={profileMi.profile_image.small} alt={profileMi.name}/>
                            <div>{profileMi.first_name}</div>
                            <div className={classNames}>
                                <button onClick={setLogout} className='button__logout'>Выйти</button>
                            </div>
                        </>
                        : <button onClick={getAuthentication} className='button__login'>Вход</button>
                }
            </div>

        </header>
    );
}

export default Header