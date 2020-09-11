import React from "react";
import {connect} from "react-redux";

import Profile from "./profile";


const ProfileContainer = (props) => {

    if (!props.profileMi) {
        return (
            <h1>Необходимо войти или зарегистрироваться</h1>
        );
    }

    return (
        <Profile profileMi={props.profileMi}/>
    );
}


let mapStateToProps = (state) => ({
    profileMi: state.auth.profileMi,
});

let mapDispatchToProps = (dispatch) => ({
    // setImages: (images) => dispatch(setImages(images)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)