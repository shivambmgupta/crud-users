import * as Consts from '../constants/consts';
import { GetUsers, DeleteUser as deleteService, AddUser as addService, UpdateUser as updateService} from '../services/services';

export const AddUser = (payload) => async (dispatch) => {
    try {
        const response = await addService(payload);
        const res = await GetUsers()
        dispatch({ 
            type: Consts.ADD_USER, 
            payload: {
                users: res?.data?.data
            }
        });
    } catch (error) {
        
    }
}

export const DeleteUser = (paylaod) => async (dispatch) => {
    try {
        const response = await deleteService(paylaod.id);
        const res = await GetUsers()
        dispatch({ 
            type: Consts.DELETE_USER, 
            payload: {
                users: res?.data?.data
            }
        });
    } catch (error) {
        
    }
}

export const UpdateUser = (payload) => async (dispatch) => {
    try {
        const response = await updateService(payload);
        const res = await GetUsers()
        dispatch({ 
            type: Consts.UPDATE_USER, 
            payload: {
                users: res?.data?.data
            }
        });
    } catch (error) {
        
    }
}