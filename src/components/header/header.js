import React from "react";
import './header.css';
import {Link} from "react-router-dom";
import Out from "../../img/out";

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
                            <div className={classNames}>
                                <div className='avatar__menu_profile'>
                                    <img src={profileMi.profile_image.small} alt={profileMi.name}/>
                                    <div>{profileMi.first_name}</div>
                                </div>

                                <div className='avatar__menu'>
                                    <Link onClick={clickMenuAvatar} to='/'>Home</Link>
                                    <Link onClick={clickMenuAvatar} to='/profile'>Профиль</Link>
                                </div>
                                <button onClick={setLogout} className='button__logout'>Выйти{<Out width={20} height={20}/>}</button>
                            </div>
                        </>
                        : <button onClick={getAuthentication} className='button__login'>Вход</button>
                }
            </div>

        </header>
    );
}

export default Header