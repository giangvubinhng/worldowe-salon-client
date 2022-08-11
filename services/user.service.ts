import axios from 'axios';
import {IUserRegister} from '@/interfaces/IUser';

const URI = `${process.env.NEXT_PUBLIC_SERVER}/api/user`

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
	} catch (e: any) {
		return e.response.data
	}
};

export const login = async (data: any) => {
	try {
		const results = await axios.post(`${URI}/login`, data, {
			withCredentials: true
		});
		if (results.status === 200) window.location.href = '/';
	} catch (err: any) {
		return err.response.data
	}
};
export const sendEmailForgetPassword = async (email: string) => {
	try {
		const result = await axios.post(`${URI}/send-reset-password-email`, {email})
		if (result.status === 200 && result.data.success) {
			return result.data
		}

	}
	catch (e: any) {
		return e.response.data
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
