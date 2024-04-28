import axios from 'axios';
import { API_BASE_URL, ACCESS_TOKEN } from '@/constants';

export async function signup(body) {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, body);
    return response.data;
}

export async function login(body) {
    const response = await axios.post(`${API_BASE_URL}/auth/signin`, body);
    return response.data;
}
export async function subscribeToNewNeeds(body) {
    const response = await axios.post(`${API_BASE_URL}/email/addEmail`, body);
    return response.data;
}

export async function registerFundraising(body, token) {
    const config = {
        headers: {
            Authorization: ` ${token}`
        }
    };

    try {
        const response = await axios.post(`${API_BASE_URL}/needs/create/activeFundraising`, body, config);
        return response.data;
    } catch (error) {
        console.error('Error registering fundraising:', error);
        throw error;
    }
}

export async function registerHumanitarianAid(body, token) {
    const config = {
        headers: {
            Authorization: `${token}`
        }
    };

    try {
        const response = await axios.post(`${API_BASE_URL}/needs/create/humanitarianAid`, body, config);
        return response.data;
    } catch (error) {
        console.error('Error registering fundraising:', error);
        throw error;
    }
}

export async function getCurrentUser(token) {
    const config = {
        headers: {
            Authorization: `${token}`
        }
    };

    try {
        const response = await axios.get(`${API_BASE_URL}/user/`, config);
        return response.data;
    } catch (error) {
        console.error('Error getting current user:', error);
        throw error;
    }
}

export async function updateUserInfo(userInfo) {
    const token = localStorage.getItem('accessToken');
    const config = {
        headers: {
            Authorization: `${token}`
        }
    };

    try {
        const response = await axios.post(`${API_BASE_URL}/user/update/optionalInfo`, userInfo, config);
        return response.data;
    } catch (error) {
        console.error('Error updating user info:', error);
        throw error;
    }
}

export async function getNeedFundraising(token) {
    const config = {
        headers: {
            Authorization: `${token}`
        }
    };

    try {
        const response = await axios.get(`${API_BASE_URL}/needs/get/activeFundraising`, config);
        return response.data;
    } catch (error) {
        console.error('Error getting current user:', error);
        throw error;
    }
}

export async function getNeedHumanitariam(token) {
    const config = {
        headers: {
            Authorization: `${token}`
        }
    };

    try {
        const response = await axios.get(`${API_BASE_URL}/needs/get/humanitarianAid`, config);
        return response.data;
    } catch (error) {
        console.error('Error getting current user:', error);
        throw error;
    }
}

