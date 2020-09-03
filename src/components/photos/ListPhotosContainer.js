import React from "react";
import {connect} from "react-redux";

import {setImages, setPage} from "../../store/photos/actions";
import ListPhotos from "./listPhotos";
import {getPhotos} from "../../api/api";


class ListPhotosContainer extends React.Component {

    componentDidMount() {
        getPhotos(this.props.page, this.props.per_page)
            .then(data => {
                this.props.setImages(data)
            });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.page !== prevProps.page) {
            getPhotos(this.props.page, this.props.per_page).then(data => {
                this.props.setImages(data)
            });
        }

        window.addEventListener('scroll', this.handleScroll);

    }

    handleScroll = () => {
        let scrollBottom = document.documentElement.getBoundingClientRect().bottom;
        let clientHeight = document.documentElement.clientHeight;

        if (scrollBottom < clientHeight + 200) {
            console.log( '12312311');

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
            <ListPhotos
                images={this.props.images}
                addPage={this.addPage}
            />
        );
    }
}

let mapStateToProps = (state) => ({
    images: state.photos.images,
    page: state.photos.page,
    per_page: state.photos.per_page,
    pageImage: state.photos.pageImage,
});

let mapDispatchToProps = (dispatch) => ({
    setImages: (images) => dispatch(setImages(images)),
    setPage: (page) => dispatch(setPage(page)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ListPhotosContainer)