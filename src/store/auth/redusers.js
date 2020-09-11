
const initialState = {
    isAuth: false,
    token: '',
    profileMi: null,
    err: false,
}

export const authReducers = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.payload
            }

        case 'SET_PROFILE_MI':
            return {
                ...state,
                profileMi: action.payload
            }

        case 'SET_IS_AUTH':
            return {
                ...state,
                isAuth: action.payload
            }

        case 'SET_ERR':
            return {
                ...state,
                err: action.payload
            }

        default:
            return state
    }
}




