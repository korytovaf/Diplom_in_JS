import React from "react";
import {connect} from "react-redux";
import {setImage, setLiked} from "../../store/photos/actions";
import Photo from "./photo";
import {getLiked, getPhoto} from "../../api/api";


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
        getLiked(this.props.photoId).then((response) => {
                this.props.setLiked(response.photo.likes)
            });
    }


    render() {
        return (
            <Photo
                image={this.props.image}
                photoId={this.props.photoId}
                likedClick={this.likedClick}

            />
        );
    }
}


let mapStateToProps = (state) => ({
    image: state.photos.image,
    token: state.auth.token,
});

let mapDispatchToProps = (dispatch) => ({
    setImage: (image) => dispatch(setImage(image)),
    setLiked: (like) => dispatch(setLiked(like)),

});


export default connect(mapStateToProps, mapDispatchToProps)(PhotoContainer)