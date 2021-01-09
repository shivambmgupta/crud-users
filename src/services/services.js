import axios from 'axios';
import * as Config from '../constants/config';

export const GetUsers = () => {
    const URL = Config.BASE_URL + 'api/users?page=2';
    return axios.get(URL);
}

export const AddUser = (payload) => {
    const URL = Config.BASE_URL + 'api/users';
    return axios.post(URL, payload);
}

export const DeleteUser = (id) => {
    const URL = Config.BASE_URL + 'api/users/' + id;
    return axios.delete(URL);
}

export const UpdateUser = (payload) => {
    const URL = Config.BASE_URL + 'api/users';
    return axios.put(URL, payload);
}

