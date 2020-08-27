import React from "react";
import {connect} from "react-redux";
import {setImage} from "../../store/photos/actions";
import ImagePage from "./imagePage";


class ImagePageContainer extends React.Component {

    componentDidMount() {
        fetch(`https://api.unsplash.com/photos/${this.props.itemId}?client_id=CCmUYdJ0XloimmGTAqnof5xFLlD27kNQiDo5pNEnVQ4`)
            .then((response) => {
                return response.json()})
            .then((data) => {
                this.props.setImage(data)
            })
    }

    render() {
        return <ImagePage {...this.props} image={this.props.image} />
    }
}


let mapStateToProps = (state) => ({
    image: state.photos.image
});

let mapDispatchToProps = (dispatch) => ({
    setImage: (image) => dispatch(setImage(image)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ImagePageContainer)