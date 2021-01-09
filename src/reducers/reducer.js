import * as Consts from '../constants/consts';
import PersistedStore from '../store/store';

export default function reducer(state = PersistedStore.loadState(), action) {
    switch (action.type) {
        case Consts.ADMIN_LOGIN: {
            return { ...state, admin: action.payload.admin, users: action.payload.users }
        }
        case Consts.ADMIN_LOGOUT: return { ...state, admin: '', users: [] }
        case Consts.DELETE_USER: {
            return { ...state, users: action.payload.users }
        }
        case Consts.ADD_USER: {
            return { ...state, users: action.payload.users }
        }
        case Consts.UPDATE_USER: {
            return { ...state, users: action.payload.users }
        }
        default: return state
    }
}