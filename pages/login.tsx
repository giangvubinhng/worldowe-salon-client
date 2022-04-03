import React, {useState} from 'react';
import styles from '../styles/Login.module.css';
import {login, forgetPassword} from '../services/user.service';
import {Modal} from 'react-bootstrap'
const Login = () => {
	const [state, setState] = useState({
		email: '',
		password: '',
		forgotEmail: ''
	});
	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const {name, value} = e.target;
		setState({
			...state,
			[name]: value,
		});
	};

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const loginInfo = {
			email: state.email,
			password: state.password
		}
		login(loginInfo);
	};

	const sendForgotPassword = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const result = forgetPassword(state.forgotEmail)
		console.log(result)
	}
	const [forgotClicked, setForgotClicked] = useState(false);
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
				</form>
				<button onClick={() => setForgotClicked(true)}>Forgot password?</button>
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
