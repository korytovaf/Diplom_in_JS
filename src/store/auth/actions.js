export const SET_TOKEN = 'SET_TOKEN';
export const SET_PROFILE_MI = 'SET_PROFILE_MI';
export const SET_IS_AUTH = 'SET_IS_AUTH';
export const SET_ERR = 'SET_ERR';


export const setToken = token => ({
    type: SET_TOKEN,
    payload: token
})

export const setProfileMi = profileMi => ({
    type: SET_PROFILE_MI,
    payload: profileMi
})

export const setIsAuth = isAuth => ({
    type: SET_IS_AUTH,
    payload: isAuth
})

export const setErr = err => ({
    type: SET_ERR,
    payload: err
})


