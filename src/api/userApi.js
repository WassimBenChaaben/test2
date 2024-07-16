
import apiClient from './apiClient';

export const getUsers = () => apiClient.get('/users');
export const getUserById = (id) => apiClient.get(`/users/${id}`);
