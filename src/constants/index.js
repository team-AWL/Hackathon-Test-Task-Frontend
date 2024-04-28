export const API_BASE_URL = 'http://localhost:8088/api';
export const API_BASE_AUTH_URL = 'http://localhost:8088';
export const ACCESS_TOKEN = 'accessToken';

export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/user-page'

export const GOOGLE_AUTH_URL = API_BASE_AUTH_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
