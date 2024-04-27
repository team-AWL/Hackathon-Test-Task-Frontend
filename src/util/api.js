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
        // Handle errors if any
        console.error('Error registering fundraising:', error);
        throw error; // You can handle or rethrow the error as needed
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