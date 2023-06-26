import api from '../app/api/api';

export function getCategories() {
    const response = api.get('/categories')
        .catch(error => {
            return error.response;
        });
    return response;
}
