import jwtService from 'app/services/jwtService';
import * as UserActions from './user.actions';

export const REGISTER_ERROR = 'REGISTER_ERROR';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export function submitRegister({ displayName, phone, password, email }) {
	return dispatch =>
		jwtService
			.createUser({
				displayName,
				phone,
				password,
				email
			})
			.then(user => {
				dispatch(UserActions.setUserData(user));
				return dispatch({
					type: REGISTER_SUCCESS
				});
			})
			.catch(error => {
				return dispatch({
					type: REGISTER_ERROR,
					payload: error
				});
			});
}

export function submitRegisterGuest({ displayName }) {
	return dispatch =>
		jwtService
			.createUser({
				displayName
			})
			.then(user => {
				dispatch(UserActions.setUserData(user));
				return dispatch({
					type: REGISTER_SUCCESS
				});
			})
			.catch(error => {
				return dispatch({
					type: REGISTER_ERROR,
					payload: error
				});
			});
}
