import React from "react";
import {connect} from "react-redux";

import Profile from "./profile";
import {Redirect} from "react-router";


const ProfileContainer = ({profileMi}) => {

    if (!profileMi) {
        return <Redirect to='/'/>
    }

    return (
        <Profile profileMi={profileMi}/>
    );
}


let mapStateToProps = (state) => ({
    profileMi: state.auth.profileMi,
});



export default connect(mapStateToProps)(ProfileContainer)