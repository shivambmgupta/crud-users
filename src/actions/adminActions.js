import * as Consts from '../constants/consts';
import { GetUsers } from '../services/services';

export const AdminLogin = (payload) => async (dispatch) => {
	try {
		const response = await GetUsers()
		dispatch({ type: Consts.ADMIN_LOGIN, payload: {
			admin: payload,
			users: response?.data?.data
		}})
	} catch(err) {

	}
}

export const adminLogout = () => async (dispatch) => {
	try {
		dispatch({ type: Consts.ADMIN_LOGOUT })
	} catch(err) {

	}
}