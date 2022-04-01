import axios from 'axios';
import { IUserRegister } from '../interfaces/IUser';

export const fetchUser = async () => {
	const results = await axios.get('http://localhost:5000/api/user/current-user', {
		withCredentials: true,
	});
	return results.data;
};

export const logout = async () => {
	const response = await axios.get('http://localhost:5000/api/user/logout', {
		withCredentials: true,
	});
	if (response.status === 200) {
		window.location.href = 'http://localhost:3000';
	}
};

export const register = async (data: IUserRegister) => {
	try {
		const results = await axios.post('http://localhost:5000/api/user/signup', data);
		if (results.status === 200)
			window.location.href = 'http:localhost:3000/login';
	} catch (e) {
		console.log(e);
	}
};

export const login = async (data: any) => {
	try {
		const results = await axios.post('http://localhost:5000/api/user/login', data, {
			withCredentials: true,
		});
		if (results.status === 200) window.location.href = 'http://localhost:3000';
	} catch (err) {
		console.log(err);
	}
};
