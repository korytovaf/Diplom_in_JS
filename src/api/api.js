import * as axios from 'axios'


const instance = axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID CCmUYdJ0XloimmGTAqnof5xFLlD27kNQiDo5pNEnVQ4',
        'Set-Cookie': 'widget_session=abc123; SameSite=None; Secure'
    },
});


export const getPhotos = (page = 1, per_page = 10) => {
    return instance
        .get(`photos?page=${page}&per_page=${per_page}`)
        .then(response => response.data)
}

