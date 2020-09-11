import Unsplash, {toJson} from "unsplash-js";

export const unsplash = new Unsplash({
    accessKey: "CCmUYdJ0XloimmGTAqnof5xFLlD27kNQiDo5pNEnVQ4",
    secret: "aXJI2FFI1YJW0DDPXoxyJJ2YFgG_ni0zAbMGw1kSwO4",
    callbackUrl: "http://localhost:3000"
});


export const authenticationUrl = unsplash.auth.getAuthenticationUrl([
    "public", "read_user", "write_user", "read_photos", "write_photos",
    "write_likes", "write_followers", "read_collections", "write_collections"
]);


export const getAuthMi = () => {
    return unsplash.currentUser.profile()
        .then(toJson)
        .then(response => response);
}


export const getPhotos = (page = 1, per_page = 10) => {
    return unsplash.photos.listPhotos(page, per_page, "latest")
        .then(toJson)
        .then(json => json);
}


export const getPhoto = (photoId) => {
    return unsplash.photos.getPhoto(photoId)
        .then(toJson)
        .then(json => json);
}


export const getLiked = (photoId) => {
    return unsplash.photos.likePhoto(photoId)
        .then(toJson)
        .then(json => json);
}

export const getUnLiked = (photoId) => {
    return unsplash.photos.unlikePhoto(photoId)
        .then(toJson)
        .then(json => json);
}