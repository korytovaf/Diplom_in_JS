import React from "react";
import './header.css';
import Header from "./header";
import {connect} from "react-redux";
import {setIsAuth, setProfileMi, setToken} from "../../store/auth/actions";
import {authenticationUrl, getAuthMi, unsplash} from "../../api/api";
import {Redirect} from "react-router-dom";


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
                    unsplash.auth.setBearerToken(json.access_token);
                    this.props.setToken(json.access_token);

                    getAuthMi()
                        .then(response => {
                            this.props.setProfileMi(response)
                            this.props.setIsAuth(true)

                        });
                });

        }
        return <Redirect to={'/'}/>
    }


    render() {
        return (
            <Header path='/' getAuthentication={this.enterAuthorization} profileMi={this.props.profileMi}/>
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