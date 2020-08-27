export const SET_IMAGES = 'SET_IMAGES';
export const SET_IMAGE = 'SET_IMAGE';


export const setImages = images => ({
    type: SET_IMAGES,
    payload: images
})
export const setImage = image => ({
    type: SET_IMAGE,
    payload: image
})




