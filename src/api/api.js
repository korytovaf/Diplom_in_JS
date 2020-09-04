import * as axios from 'axios'
import Unsplash from "unsplash-js";


const instance = axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID CCmUYdJ0XloimmGTAqnof5xFLlD27kNQiDo5pNEnVQ4',
        'Set-Cookie': 'widget_session=abc123; SameSite=None; Secure'
    },
});


export const unsplash = new Unsplash({
    accessKey: "CCmUYdJ0XloimmGTAqnof5xFLlD27kNQiDo5pNEnVQ4",
    secret: "aXJI2FFI1YJW0DDPXoxyJJ2YFgG_ni0zAbMGw1kSwO4",
    callbackUrl: "http://localhost:3000"
});


export const authenticationUrl = unsplash.auth.getAuthenticationUrl([
    "public", "read_user", "write_user", "read_photos", "write_photos",
    "write_likes", "write_followers", "read_collections", "write_collections"
]);


export const getAuthMi = (access_token) => {
    return instance
        .get(`me?access_token=${access_token}`)
        .then(response => response);
}


export const getPhotos = (page = 1, per_page = 10) => {
    return instance
        .get(`photos?page=${page}&per_page=${per_page}`)
        .then(response => response.data)
}


export const getImagePage = (photoId) => {
    return instance
        .get(`photos/${photoId}`)
        .then(response => response.data)
}


export const getLiked = (photoId, token) => {
    return instance
        .post(`photos/${photoId}/like?access_token=${token}`)
        .then(response => response.data)
}

