import React, {useState} from 'react';
import styles from '@/styles/Login.module.css';
import {login, forgetPassword} from '@/services/user.service';
import {Modal} from 'react-bootstrap'
const Login = () => {
	const [state, setState] = useState({
		email: '',
		password: '',
		forgotEmail: '',
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

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const loginInfo = {
			email: state.email,
			password: state.password,
			remembered: state.rememberMe,

		}
		try{
			const result = await login(loginInfo);
			if(!result.success){
				setError(result.message);
			}
		}catch(e)
		{
			return e
		}
		
	};

	const sendForgotPassword = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const result = forgetPassword(state.forgotEmail)
	}
	const [forgotClicked, setForgotClicked] = useState(false);
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
				<button className={styles.forgotBtn} onClick={() => setForgotClicked(true)}>Forgot password?</button>
				<Modal size="sm" centered show={forgotClicked} onHide={() => setForgotClicked(false)}>
					<Modal.Body>
						<form onSubmit={sendForgotPassword}>
							<input type="email" name="forgotEmail" value={state.forgotEmail} onChange={onInputChange} placeholder="enter email" />
							<button type="submit" className="btn btn-dark btn-sm btn-block">
								Send
							</button>
						</form>
					</Modal.Body>
				</Modal>
			</div>
		</div>
	);
};

export default Login;
