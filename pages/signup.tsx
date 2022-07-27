import Link from 'next/link';
import React, { useState } from 'react';
import styles from '@/styles/Signup.module.css';
import { register } from '@/services/user.service';
const Signup = () => {
	const [state, setState] = useState({
		email: '',
		password: '',
		first_name: '',
		last_name: '',
	});
	const [error, setError] = useState('');
	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setState({
			...state,
			[name]: value,
		});
	}
	const submit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const result = await register(state);
			if (!result.success) {
				setError(result.message)
			}
		} catch (e) {
			return e
		}
	};
	return (
		<div className={styles.container}>
			<div className={styles.inner}>
				<form onSubmit={submit}>
					<h3>Register</h3>
					{error !== '' || error !== undefined ? (<p className={styles.errorMessage}>{error}</p>) : null}
					<div className="form-group">
						<label>First name*</label>
						<input
							type="text"
							value={state.first_name}
							name="first_name"
							onChange={onInputChange}
							className="form-control"
							placeholder="Enter first name"
							required
						/>
					</div>
					<div className="form-group">
						<label>Last name*</label>
						<input
							type="text"
							value={state.last_name}
							name="last_name"
							onChange={onInputChange}
							className="form-control"
							placeholder="Enter last name"
							required
						/>
					</div>
					<div className="form-group">
						<label>Email*</label>
						<input
							type="email"
							value={state.email}
							name="email"
							onChange={onInputChange}
							className="form-control"
							placeholder="Enter email"
							required
						/>
					</div>
					<div className="form-group">
						<label>Password*</label>
						<input
							type="password"
							value={state.password}
							name="password"
							onChange={onInputChange}
							className="form-control"
							placeholder="Enter password"
							required
						/>
					</div>
					<button type="submit" className={`${styles.submitBtn} btn btn-dark btn-lg btn-block`}>
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
