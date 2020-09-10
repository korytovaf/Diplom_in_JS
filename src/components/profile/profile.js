import React from "react";

const Profile = ({profileMi}) => {

    return (
        <div className='profile'>
            <div className='profile_image'>
                <img src={profileMi.profile_image.large} alt={profileMi.name}/>
                <div className="profile_data">
                    <h1>{profileMi.name}</h1>
                    <div>{profileMi.email}</div>
                </div>
            </div>
            <div className="profile_photos">

            </div>


        </div>
    );
}

export default Profile