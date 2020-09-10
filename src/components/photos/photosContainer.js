import React from "react";
import {connect} from "react-redux";

import {setAddedImages, setImages, setLoading, setPage} from "../../store/photos/actions";
import Photos from "./photos";
import {getPhotos} from "../../api/api";


class PhotosContainer extends React.Component {

    componentDidMount() {
        getPhotos(this.props.page, this.props.per_page)
            .then(data => {
                this.props.setImages(data)
            });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.page !== prevProps.page) {
            getPhotos(this.props.page, this.props.per_page).then(data => {
                this.props.setAddedImages(data)
            });
        }
        window.addEventListener('scroll', this.handleScroll);
    }


    handleScroll = () => {
        let scrollBottom = document.documentElement.getBoundingClientRect().bottom;
        let clientHeight = document.documentElement.clientHeight;

        if (scrollBottom - clientHeight < 500 && this.props.loading ) {
            this.addPage()
            this.props.setLoading(false)
        }
    };


    addPage = () => {
        let page = this.props.page
        this.props.setPage(page + 1)
    }


    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }


    render() {
        return (
            <Photos
                images={this.props.images}
            />
        );
    }
}


let mapStateToProps = (state) => ({
    images: state.photos.images,
    page: state.photos.page,
    per_page: state.photos.per_page,
    pageImage: state.photos.pageImage,
    loading: state.photos.loading,
});

let mapDispatchToProps = (dispatch) => ({
    setImages: (images) => dispatch(setImages(images)),
    setAddedImages: (images) => dispatch(setAddedImages(images)),
    setPage: (page) => dispatch(setPage(page)),
    setLoading: (loading) => dispatch(setLoading(loading))
})

export default connect(mapStateToProps, mapDispatchToProps)(PhotosContainer)