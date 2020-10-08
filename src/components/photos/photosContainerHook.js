import React, {useEffect, useReducer, useState} from "react";
import Photos from "./photos";
import {getPhotos} from "../../api/api";
import {initialState, PhotosContext, photosHooksReducers} from "../../context/photos/photosReducer";


const PhotosContainerHook = () => {

    const [state, dispatch] = useReducer(photosHooksReducers, initialState);
    const [onscroll, setOnscroll] = useState(false);


    useEffect(() => {

        getPhotos(state.page, state.per_page)
            .then(data => {
                    dispatch({payload: data, type: 'SET_IMAGES'});
            });

    }, [state.page, state.per_page]);



    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    });


    function handleScroll() {
        const scrollBottom = document.documentElement.getBoundingClientRect().bottom;
        const clientHeight = document.documentElement.clientHeight;

        if (scrollBottom - clientHeight < 500) {
            setOnscroll(true)
        }

        if (scrollBottom - clientHeight >= 500) {
            setOnscroll(false)
        }
    }


    useEffect(() => {
        if (onscroll) {
            dispatch({payload: 1, type: 'SET_PAGE'})
        }
    }, [onscroll]);


    return (
        <PhotosContext.Provider value={{dispatch, state}}>
            <Photos />
        </PhotosContext.Provider>
    );
}

export default PhotosContainerHook