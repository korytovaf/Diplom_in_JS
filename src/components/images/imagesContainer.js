import React from "react";
import {connect} from "react-redux";

import {setImages} from "../../store/photos/actions";
import Images from "./images";




class ImagesContainer extends React.Component {

    componentDidMount() {
        const numberOfPhotos = 12;
        fetch(`https://api.unsplash.com/photos/?client_id=CCmUYdJ0XloimmGTAqnof5xFLlD27kNQiDo5pNEnVQ4&per_page=${numberOfPhotos}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.props.setImages(data)
            });
    }


    render() {
        return <Images {...this.props}
                       images={this.props.images}
                       pageImage={this.props.pageImage}
        />
    }
}

let mapStateToProps = (state) => ({
    images: state.photos.images,
    pageImage: state.photos.pageImage,
});

let mapDispatchToProps = (dispatch) => ({
    setImages: (images) => dispatch(setImages(images)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ImagesContainer)