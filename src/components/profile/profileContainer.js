import React from "react";
import {connect} from "react-redux";

import Profile from "./profile";



class ProfileContainer extends React.Component {


    render() {

        if (!this.props.profileMi) {
            return <h1>Необходимо авторизироваться</h1>
        }

        return (
            <Profile profileMi={this.props.profileMi} />
        );
    }
}


let mapStateToProps = (state) => ({
    profileMi: state.auth.profileMi,
});

let mapDispatchToProps = (dispatch) => ({
    // setImages: (images) => dispatch(setImages(images)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)