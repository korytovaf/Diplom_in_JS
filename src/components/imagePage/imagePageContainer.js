import React from "react";
import {connect} from "react-redux";
import {setImage, setLiked, setUpdateImage} from "../../store/photos/actions";
import ImagePage from "./imagePage";


class ImagePageContainer extends React.Component {

    setLikedPhoto = () => {
        this.props.setLiked(true)
    }


    componentDidMount() {
        fetch(`https://api.unsplash.com/photos/${this.props.itemId}?client_id=CCmUYdJ0XloimmGTAqnof5xFLlD27kNQiDo5pNEnVQ4`)
            .then((response) => {
                return response.json()})
            .then((data) => {
                this.props.setImage(data)
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.props.like !== this.props.image.liked_by_user) {
            fetch(`https://api.unsplash.com/photos/${this.props.image.id}/like?access_token=${this.props.token}`, {method: 'POST'})
                .then((response) => {
                    return response.json()})
                .then((data) => {
                    this.props.setUpdateImage(data.photo.liked_by_user);

                })
        }
    }




    render() {
        return <ImagePage {...this.props} image={this.props.image} setLikedPhoto={this.setLikedPhoto}/>
    }
}


let mapStateToProps = (state) => ({
    image: state.photos.image,
    like: state.photos.like,
    token: state.auth.token,
});

let mapDispatchToProps = (dispatch) => ({
    setImage: (image) => dispatch(setImage(image)),
    setLiked: (like) => dispatch(setLiked(like)),
    setUpdateImage: (liked_by_user) => dispatch(setUpdateImage(liked_by_user))
});


export default connect(mapStateToProps, mapDispatchToProps)(ImagePageContainer)