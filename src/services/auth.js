import api from '@/app/api/api';

export function signUp(email, password, confirmPassword) {
    const response = api.post('/auth/sign-up', { email, password, confirmPassword })
        .catch(error => {
            return error.response;
        });
    return response;
}

export function login(email, password) {
    const response = api.post('/auth/login', { email, password })
        .catch(error => {
            return error.response;
        });
    return response;
}
