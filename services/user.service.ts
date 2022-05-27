import axios from 'axios';
import {IUserRegister} from '../interfaces/IUser';

const URI = 'http://localhost:5000/api/user'

export const fetchUser = async () => {
	const results = await axios.get(`${URI}/current-user`, {
		withCredentials: true,
	});
	return results.data;
};

export const logout = async () => {
	const response = await axios.get(`${URI}/logout`, {
		withCredentials: true,
	});
	if (response.status === 200) {
		window.location.href = 'http://localhost:3000';
	}
};

export const register = async (data: IUserRegister) => {
	try {
		const results = await axios.post(`${URI}/signup`, data);
		if (results.status === 200)
			window.location.href = '/login';
	} catch (e) {
		console.log(e);
	}
};

export const login = async (data: any) => {
	try {
		const results = await axios.post(`${URI}/login`, data, {
			withCredentials: true
		});
		if (results.status === 200) window.location.href = '/';
	} catch (err) {
		console.log(err);
	}
};
export const forgetPassword = async (email: string) => {
	try {
		const result = await axios.post(`${URI}/send-reset-password-email`, {email})
		if (result.status === 200 && result.data.success) {
			return result.data
		}

	}
	catch (e) {
		return e
	}

}

export const changePassword = async (oldPassword: string, newPassword: string) => {
	try {
		const result = await axios.post(`${URI}/change-password`, {oldPassword, newPassword}, {withCredentials: true})
		if (result.status === 200 && result.data.success) {
			return result.data
		}
	}
	catch (e:any) {
		return e.response.data
	}
}
