import Link from 'next/link';
import React, { useState } from 'react';
import styles from '../styles/Signup.module.css';
import { register } from '../services/user.service';
const Signup = () => {
	const [state, setState] = useState({
		email: '',
		password: '',
		first_name: '',
		last_name: '',
	});
	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setState({
			...state,
			[name]: value,
		});
	};
	const submit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		register(state);
	};
	return (
		<div className={styles.container}>
			<div className={styles.inner}>
				<form onSubmit={submit}>
					<h3>Register</h3>

					<div className="form-group">
						<label>First name</label>
						<input
							type="text"
							value={state.first_name}
							name="first_name"
							onChange={onInputChange}
							className="form-control"
							placeholder="First name"
						/>
					</div>

					<div className="form-group">
						<label>Last name</label>
						<input
							type="text"
							value={state.last_name}
							name="last_name"
							onChange={onInputChange}
							className="form-control"
							placeholder="Last name"
						/>
					</div>

					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							value={state.email}
							name="email"
							onChange={onInputChange}
							className="form-control"
							placeholder="Enter email"
						/>
					</div>

					<div className="form-group">
						<label>Password</label>
						<input
							type="password"
							value={state.password}
							name="password"
							onChange={onInputChange}
							className="form-control"
							placeholder="Enter password"
						/>
					</div>

					<button type="submit" className="btn btn-dark btn-lg btn-block">
						Register
					</button>
					<p className="forgot-password text-right">
						Already registered <Link href="/login">log in?</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Signup;
