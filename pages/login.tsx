import React, { useState } from 'react';
import styles from '../styles/Login.module.css';
import { login } from '../services/user.service';
const Login = () => {
	const [state, setState] = useState({
		email: '',
		password: '',
	});
	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setState({
			...state,
			[name]: value,
		});
	};

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		login(state);
	};
	return (
		<div className={styles.container}>
			<div className={styles.inner}>
				<form onSubmit={onSubmit}>
					<h3>Log in</h3>

					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							name="email"
							value={state.email}
							onChange={onInputChange}
							className="form-control"
							placeholder="Enter email"
						/>
					</div>

					<div className="form-group">
						<label>Password</label>
						<input
							type="password"
							name="password"
							value={state.password}
							onChange={onInputChange}
							className="form-control"
							placeholder="Enter password"
						/>
					</div>

					<div className="form-group">
						<div className="custom-control custom-checkbox">
							<input
								type="checkbox"
								className="custom-control-input"
								id="customCheck1"
							/>
							<label className="custom-control-label" htmlFor="customCheck1">
								Remember me
							</label>
						</div>
					</div>

					<button type="submit" className="btn btn-dark btn-lg btn-block">
						Sign in
					</button>
					<p className="forgot-password text-right">
						Forgot <a href="#">password?</a>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
