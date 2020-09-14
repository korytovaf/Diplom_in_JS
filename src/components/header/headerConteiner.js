import React from "react";
import './header.css';
import Header from "./header";
import {connect} from "react-redux";
import {setActiveMenuAvatar, setIsAuth, setLogout, setProfileMi, setToken} from "../../store/auth/actions";
import {authenticationUrl, getAuthMi, unsplash} from "../../api/api";


class HeaderContainer extends React.Component {

    clickMenuAvatar = () => {
        this.props.setActiveMenuAvatar(!this.props.activeMenuAvatar)
    }

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
                setLogout={this.props.setLogout}/>
        )
    }
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    token: state.auth.token,
    profileMi: state.auth.profileMi,
    activeMenuAvatar: state.auth.activeMenuAvatar,
});

const mapDispatchToProps = (dispatch) => ({
    setToken: token => dispatch(setToken(token)),
    setProfileMi: profileMi => dispatch(setProfileMi(profileMi)),
    setIsAuth: isAuth => dispatch(setIsAuth(isAuth)),
    setLogout: () => dispatch(setLogout()),
    setActiveMenuAvatar: (active) => dispatch(setActiveMenuAvatar(active)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)