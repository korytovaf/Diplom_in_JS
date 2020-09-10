export const SET_IMAGES = 'SET_IMAGES';
export const SET_ADDED_IMAGES = 'SET_ADDED_IMAGES';
export const SET_LOADING = 'SET_LOADING';
export const SET_IMAGE = 'SET_IMAGE';
export const SET_UPDATE_IMAGE = 'SET_UPDATE_IMAGE';
export const SET_LIKED = 'SET_LIKED';
export const SET_PAGE = 'SET_PAGE';



export const setImages = images => ({
    type: SET_IMAGES,
    payload: images
})

export const setAddedImages = images => ({
    type: SET_ADDED_IMAGES,
    payload: images
})

export const setLoading = loading => ({
    type: SET_LOADING,
    payload: loading
})

export const setPage = page => ({
    type: SET_PAGE,
    payload: page
})

export const setImage = (image, page) => ({
    type: SET_IMAGE,
    payload: image, page
})

export const setUpdateImage = (likes) => ({
    type: SET_UPDATE_IMAGE,
    payload: {likes}
})

export const setLiked = likes => ({
    type: SET_LIKED,
    payload: likes
})



