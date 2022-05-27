import React, {useState} from 'react';
import {changePassword} from '../../../services/user.service';
import {IReturnObject} from '../../../interfaces/IBasicReturnTypeObject';
const PasswordChange = () => {

	let InitialReturnObject: IReturnObject = {
		success: false,
		message: ''
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
		const {name, value} = e.target;
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
			setResult(result);
		}
	};

	return (
		<div>
			<div>
				<form onSubmit={submit}>
					<div>
						<label>Old Password</label>
						<input type="password" name="oldPassword" placeholder="Enter Old Password" value={input.oldPassword} onChange={onInputChange}></input>

					</div>

					<div>
						<label>New Password</label>
						<input type="password" name="password" placeholder="Enter New Password" value={input.password} onChange={onInputChange}></input>

					</div>

					<div>
						<label>Confirm Password</label>
						<input type="password" name="confirmPassword" value={input.confirmPassword} onChange={onInputChange}></input>

					</div>

					<button>Change Password</button>
				</form>
				{error.hasError ? (<p>{error.message}</p>) : null}
				{result.success ? (<p>{result.message}</p>) : null}
			</div>
		</div>
    );
}
export default PasswordChange;
