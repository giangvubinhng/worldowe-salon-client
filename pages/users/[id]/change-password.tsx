import React, { useState } from 'react';
import { changePassword } from '@/services/user.service';
import { AuthorizedRoute } from '@/components/HOC/AuthorizedRoute';
import { IReturnObject } from '@/interfaces/IBasicReturnTypeObject';
import { GetServerSideProps } from 'next';
import styles from '@/styles/Change-Password.module.css'
import { Button } from 'react-bootstrap';

const PasswordChange = () => {

	let InitialReturnObject: IReturnObject = {
		success: false,
		message: '',
		loaded: false
	}

	const [input, setInput] = useState({
		oldPassword: '',
		password: '',
		confirmPassword: ''
	});

	const [error, setError] = useState({
		hasError: false,
		message: ''
	});

	const [result, setResult] = useState(InitialReturnObject)

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setInput(prev => ({
			...prev,
			[name]: value
		}));
	}

	const submit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (input.password != input.confirmPassword) {
			setError({
				hasError: true,
				message: 'New passwords do not match'
			})
		}
		else {
			const result = await changePassword(input.oldPassword, input.password);
			setError({
				hasError: false,
				message: ''
			})
			result.loaded = true;
			setResult(result);
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.inner}>
				<form onSubmit={submit}>
					<div>
						<h2>Password Reset</h2>
						<p>Set a new password</p>
					</div>
					<div>
						<label>Old Password*</label>
						<input type="password" name="oldPassword" placeholder="Enter Old Password" value={input.oldPassword} onChange={onInputChange} style={{ width: "500px" }}></input>
					</div>
					<div>
						<label>New Password*</label>
						<input type="password" name="password" placeholder="Enter New Password" value={input.password} onChange={onInputChange} style={{ width: "500px" }}></input>
					</div>
					<div>
						<label>New Password Confirmation*</label>
						<input type="password" name="confirmPassword" placeholder="Confirm New Password" value={input.confirmPassword} onChange={onInputChange} style={{ width: "500px" }}></input>
					</div>
					<Button className='btn btn-dark'>Done</Button>
				</form>
				{error.hasError ? (<p>{error.message}</p>) : null}
				{result.loaded ? (<p>{result.message}</p>) : null}
			</div>
		</div>

	);
}
export default PasswordChange;

export const getServerSideProps: GetServerSideProps = AuthorizedRoute(
	async (ctx) => {
		return {
			props: {

			},
		}
	}
)
