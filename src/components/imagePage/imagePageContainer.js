import React from "react";
import {connect} from "react-redux";
import {setImage, setLiked} from "../../store/photos/actions";
import ImagePage from "./imagePage";
import {getImagePage, getLiked} from "../../api/api";


class ImagePageContainer extends React.Component {


    componentDidMount() {
        getImagePage(this.props.photoId)
            .then((data) => {
                this.props.setImage(data)

            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (prevProps.image) {
            if (this.props.image.likes !== prevProps.image.likes)
                getImagePage(this.props.photoId)
                    .then((data) => {
                        this.props.setImage(data)

                    })
        }
    }


    likedClick = () => {
        getLiked(this.props.photoId, this.props.token)
            .then((data) => { debugger
                this.props.setLiked(data.photo.likes)
            });
    }


    render() {
        return (
            <ImagePage
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


export default connect(mapStateToProps, mapDispatchToProps)(ImagePageContainer)