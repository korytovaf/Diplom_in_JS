
const initialState = {
    image: null,
    // images: [],
    // page: 1,
    // per_page: 10,
    like: false,
    loading: false,
}

const photosReducers = (state = initialState, action) => {
    /*const stateCopy = {...state};*/

    switch (action.type) {

/*        case 'SET_IMAGES':
            return {
                ...state, images: action.payload, loading: true
            };*/

/*        case 'SET_ADDED_IMAGES':
            stateCopy.images = [...state.images, ...action.payload];
            stateCopy.loading = true;
            return stateCopy;*/

/*        case 'SET_LOADING':
            return {
                ...state, loading: action.payload,
            }*/

/*        case 'SET_PAGE':
            return {
                ...state, page: action.payload,
            }*/

        case 'SET_IMAGE':
            return {...state, image: action.payload}

        case 'SET_UPDATE_IMAGE':
            return {...state, image: {...state.image, liked_by_user: action.payload.liked_by_user}};

        case 'SET_LIKED':
            return {...state, image: {...state.image, likes: action.payload}};

        default:
            return state
    }
}


export default photosReducers