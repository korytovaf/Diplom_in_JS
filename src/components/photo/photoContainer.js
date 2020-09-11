import React from "react";
import {connect} from "react-redux";
import {setImage, setLiked} from "../../store/photos/actions";
import Photo from "./photo";
import {getLiked, getPhoto, getUnLiked} from "../../api/api";
import {setErr} from "../../store/auth/actions";


class PhotoContainer extends React.Component {

    componentDidMount() {
        getPhoto(this.props.photoId)
            .then((data) => {
                this.props.setImage(data)
            })
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.image) {
            if (this.props.image.likes !== prevProps.image.likes)
                getPhoto(this.props.photoId)
                    .then((data) => {
                        this.props.setImage(data)
                    })
        }
    }

    likedClick = () => {
        if (!this.props.isAuth) {
            this.props.setErr(true)
        } else {
            getLiked(this.props.photoId).then((response) => {
                this.props.setLiked(response.photo.likes)
            });
        }
    }

    unlikeClick = () => {
        if (!this.props.isAuth) {
            this.props.setErr(true)
        } else {
            getUnLiked(this.props.photoId).then((response) => {
                this.props.setLiked(response.photo.likes)
            });
        }
    }


    render() {
        return (
            <>
                <Photo
                    err={this.props.err}
                    isAuth={this.props.isAuth}
                    image={this.props.image}
                    photoId={this.props.photoId}
                    likedClick={this.likedClick}
                    unlikeClick={this.unlikeClick}
                />
            </>
        );
    }
}


let mapStateToProps = (state) => ({
    image: state.photos.image,
    token: state.auth.token,
    isAuth: state.auth.isAuth,
    err: state.auth.err,
});

let mapDispatchToProps = (dispatch) => ({
    setImage: (image) => dispatch(setImage(image)),
    setLiked: (like) => dispatch(setLiked(like)),
    setErr: (err) => dispatch(setErr(err)),

});


export default connect(mapStateToProps, mapDispatchToProps)(PhotoContainer)