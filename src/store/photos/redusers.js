
const initialState = {
    image: null,
    images: null
}

export const photosReducers = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_IMAGES':
            return {
                ...state,
                images: action.payload
            }

        case 'SET_IMAGE':
            return {
                ...state,
                image: action.payload
            }

        default:
            return state
    }
}