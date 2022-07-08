import React, {useState} from 'react';
import styles from '@/styles/Login.module.css'
import {login} from '@/services/user.service';
import ForgotPassword from '@/components/ForgotPassword';
const Login = () => {
	const [state, setState] = useState({
		email: '',
		password: '',
		rememberMe: false
	});

	const [error, setError] = useState('');

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const {name, value} = e.target;
		setState({
			...state,
			[name]: value,
		});
	};

	const toggleRememberMe = () => {
		setState({
			...state,
			rememberMe: !state.rememberMe,
		});

	}
	const [forgotClicked, setForgotClicked] = useState(false);

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const loginInfo = {
			email: state.email,
			password: state.password,
			remembered: state.rememberMe,

		}
		try {
			const result = await login(loginInfo);
			if (!result.success) {
				setError(result.message);
			}
		} catch (e) {
			return e
		}

	};

	return (
		<div className={styles.container}>
			<div className={styles.inner}>
				<form onSubmit={onSubmit}>
					<h3>Log in</h3>
					{error !== '' || error !== undefined ? (<p className={styles.errorMessage}>{error}</p>) : null}
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
								key={Math.random()}
								className="custom-control-input"
								name="remember"
								onChange={toggleRememberMe}
								checked={state.rememberMe}
							/>
							<label className="custom-control-label" htmlFor="customCheck1">
								Remember me
							</label>
						</div> 
					</div>

					<button type="submit" className="btn btn-dark btn-lg btn-block">
						Sign in
					</button>
				</form>
				<button className={`${styles.forgotBtn}`} onClick={() => setForgotClicked(true)}>Forgot password?</button>
				<ForgotPassword forgotClicked={forgotClicked} hideClicked={() => setForgotClicked(false)} />
			</div>
		</div >
	);
};

export default Login;
