import React from "react";
import './header.css';
import Header from "./header";
import {connect} from "react-redux";
import {setActiveMenuAvatar, setIsAuth, setLogout, setProfileMi} from "../../store/auth/actions";
import {authenticationUrl, getAuthMi, unsplash} from "../../api/api";
import Cookies from 'js-cookie'


class HeaderContainer extends React.Component {

    clickMenuAvatar = () => {
        this.props.setActiveMenuAvatar(!this.props.activeMenuAvatar)
    }

    enterAuthorization() {
        window.location.assign(authenticationUrl);
    }

    code = window.location.search.split('code=')[1]


    componentDidMount() {

        const token = Cookies.get('access_token');

        if (token) {
            getAuthMi()
                .then(response => {
                    this.props.setProfileMi(response);
                    this.props.setIsAuth(true);
                });

        } else if (this.code) {
            unsplash.auth.userAuthentication(this.code)
                .then(res => res.json())
                .then(json => {
                    unsplash.auth.setBearerToken(json.access_token);
                    Cookies.set('access_token', json.access_token, {expires: 3600})

                    getAuthMi()
                        .then(response => {
                            this.props.setProfileMi(response)
                            this.props.setIsAuth(true)
                        });
                });
        }
    }

    logout = () => {
        Cookies.set('access_token', '', {expires: -1});
        this.props.setLogout();
    }


    render() {
        let classNames = 'logout';
        if (this.props.activeMenuAvatar) {
            classNames += ' active'
        }

        return (
            <Header
                clickMenuAvatar={this.clickMenuAvatar}
                classNames={classNames}
                getAuthentication={this.enterAuthorization}
                profileMi={this.props.profileMi}
                setLogout={this.logout}/>
        )
    }
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    profileMi: state.auth.profileMi,
    activeMenuAvatar: state.auth.activeMenuAvatar,
});

const mapDispatchToProps = (dispatch) => ({
    setProfileMi: profileMi => dispatch(setProfileMi(profileMi)),
    setIsAuth: isAuth => dispatch(setIsAuth(isAuth)),
    setLogout: () => dispatch(setLogout()),
    setActiveMenuAvatar: (active) => dispatch(setActiveMenuAvatar(active)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
