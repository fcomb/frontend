import { api } from 'config/sources';

export const setHTTPAuth = (token) => (api.setHeader(`Authorization`, `Token ${token}`));
