
const initialState = {
    image: null,
    images: [],
    page: 1,
    per_page: 10,
    like: false,


}

const photosReducers = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_IMAGES':
            const stateCopy = {...state};
            stateCopy.images = [...state.images, ...action.payload];
            return stateCopy;

        case 'SET_PAGE':
            return {
                ...state, page: action.payload,
            }

        case 'SET_IMAGE':
            return {...state, image: action.payload}

        case 'SET_UPDATE_IMAGE':
            return {...state, image: {...state.image, liked_by_user: action.payload.liked_by_user}};

        case 'SET_LIKED':
            return {...state, like: action.payload}

        default:
            return state
    }
}


export default photosReducers