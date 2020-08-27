import React from "react";
import './header.css';
import Header from "./header";
import {connect} from "react-redux";
import Unsplash from "unsplash-js";
import * as axios from "axios";
import {setIsAuth, setProfileMi, setToken} from "../../store/auth/actions";


const instance = axios.create({
    baseURL: 'https://api.unsplash.com/',
});

const unsplash = new Unsplash({
    accessKey: "CCmUYdJ0XloimmGTAqnof5xFLlD27kNQiDo5pNEnVQ4",
    secret: "aXJI2FFI1YJW0DDPXoxyJJ2YFgG_ni0zAbMGw1kSwO4",
    callbackUrl: "http://localhost:3001"
});

const authenticationUrl = unsplash.auth.getAuthenticationUrl([
    "public",
    "read_user",
    "write_user",
    "read_photos",
    "write_photos",
    "write_likes",
    "write_followers",
    "read_collections",
    "write_collections"
]);


class HeaderContainer extends React.Component {

    enterAuthorization() {
        window.location.assign(authenticationUrl);
    }

    code = window.location.search.split('code=')[1]


    componentDidMount() {

         if (this.code) {
            unsplash.auth.userAuthentication(this.code)
                .then(res => res.json())
                .then(json => {
                    unsplash.auth.setBearerToken(json.access_token)
                    this.props.setToken(json.access_token)

                    instance
                        .get(`me?access_token=${json.access_token}`)
                        .then(response => {
                            this.props.setProfileMi(response.data)
                            this.props.setIsAuth(true)
                        });
                });
        }

    }


    render() {
        return (
            <Header getAuthentication={this.enterAuthorization} profileMi={this.props.profileMi} />
        );
    }
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    token: state.auth.token,
    profileMi: state.auth.profileMi,
});

const mapDispatchToProps = (dispatch) => ({
    setToken: token => dispatch(setToken(token)),
    setProfileMi: profileMi => dispatch(setProfileMi(profileMi)),
    setIsAuth: isAuth => dispatch(setIsAuth(isAuth)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)