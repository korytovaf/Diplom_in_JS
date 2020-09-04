export const SET_IMAGES = 'SET_IMAGES';
export const SET_LOADING = 'SET_LOADING';
export const SET_IMAGE = 'SET_IMAGE';
export const SET_UPDATE_IMAGE = 'SET_UPDATE_IMAGE';
export const SET_LIKED = 'SET_LIKED';
export const SET_PAGE = 'SET_PAGE';



export const setImages = images => ({
    type: SET_IMAGES,
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

export const setUpdateImage = (liked_by_user) => ({
    type: SET_UPDATE_IMAGE,
    payload: {liked_by_user}
})

export const setLiked = like => ({
    type: SET_LIKED,
    payload: like
})



