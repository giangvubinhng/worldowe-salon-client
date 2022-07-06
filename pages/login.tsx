import React, { useState } from 'react';
import styles from '@/styles/Login.module.css'
import { login, forgetPassword } from '@/services/user.service';
import { Modal } from 'react-bootstrap'
import ForgotPassword from '@/components/ForgotPassword';
const Login = () => {
	const [state, setState] = useState({
		email: '',
		password: '',
		forgotEmail: '',
		rememberMe: false
	});

	const [error, setError] = useState('');

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
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
				{/* <button className={styles.forgotBtn} onClick={() => setForgotClicked(true)}>Forgot password?</button>
				<Modal size="sm" centered show={forgotClicked} onHide={() => setForgotClicked(false)}>
					<Modal.Body>
						<form onSubmit={sendForgotPassword}>
							<input type="email" name="forgotEmail" value={state.forgotEmail} onChange={onInputChange} placeholder="enter email" />
							<button type="submit" className="btn btn-dark btn-sm btn-block">
								Send
							</button>
						</form>
					</Modal.Body>
				</Modal> */}


				<ForgotPassword/> 
				{/* /* <button className={styles.forgotBtn} onClick={() => setForgotClicked(true)}>Forgot password?</button> */}
				{/* <Modal size="sm" centered show={forgotClicked} onHide={() => setForgotClicked(false)}>
					<Modal.Body>
						<form id="lost-form">
							<div className={styles.modalBody}>
								<div id="div-lost-msg">
									<div id="icon-lost-msg" className="glyphicon glyphicon-chevron-right"></div>
									<h3>Forgot Password?</h3>
								</div>
								<label>Lost your password? Please enter your email address. You will receive a link to create a new password via email.</label>
								<input type="email" name="forgotEmail" className="form-control" value={state.forgotEmail} onChange={onInputChange} placeholder="Enter Email" required></input>
							</div>
							<div className="modal-footer">
								<div>   
									<button type="submit" className="btn btn-dark btn-lg btn-block">Send</button>
								</div>
								<div>
									<button id="lost_login_btn" type="button" className={styles.GenBtn}>Log In</button>
									<button id="lost_register_btn" className={styles.GenBtn}>Register</button>
								</div>
							</div>
						</form>
					</Modal.Body>
				</Modal> */}
			</div>
		</div >
	);
}; 

export default Login;