import {createContext} from "react";

export const PhotosContext = createContext();
export const initialState = {
    images: [],
    page: 1,
    per_page: 20,
}


export const photosHooksReducers = (state, action) => {
    switch (action.type) {

        case 'SET_IMAGES':
            return {
                ...state,
                images: [...state.images, ...action.payload],
            };

        case 'SET_PAGE':
            return {
                ...state,
                page: state.page + action.payload
            }

        default:
            return state
    }
}

