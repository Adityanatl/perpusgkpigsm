import VueCookies from 'vue-cookies'
export const getToken = state => {
    return VueCookies.get('modeling');
}

export const getUserSession = state => state.user_session;

export const isTokenExpired = state => {
    let exp = state.user_session.token.exp;

    let now = new Date().getTime() / 1000;

    return now >= exp;
}
