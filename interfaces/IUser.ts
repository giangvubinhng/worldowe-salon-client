export interface IUserBody {
	email: string;
	first_name: string;
	last_name: string;
	is_loggedIn: boolean;
}
export interface IUserRegister {
	email: string;
	first_name: string;
	last_name: string;
	password: string;
}

export interface IUserLogin {
	email: string;
	password: string;
}
