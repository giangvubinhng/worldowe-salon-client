import React, { useState } from 'react';
import { IReturnObject } from '@/interfaces/IBasicReturnTypeObject';
import styles from '@/styles/Change-Password.module.css'

const ResetPassword = () => {

    let InitialReturnObject: IReturnObject = {
		success: false,
		message: '',
		loaded: false
	}

	const [input, setInput] = useState({
		password: '',
		confirmPassword: '',
		token: ''
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
                        <label>New Password*</label>
                        <input type="password" name="password" placeholder="Enter New Password" value={input.password} onChange={onInputChange} style={{ width: "500px" }}></input>
                    </div>
                    <div>
                        <label>New Password Confirmation*</label>
                        <input type="password" className="confirmPassword" placeholder="Confirm New Password" value={input.confirmPassword} onChange={onInputChange} style={{ width: "500px" }}></input>
                    </div>
                    <button className={`btn btn-dark ${styles.doneBtn}`}>Done</button>
                </form>
                {error.hasError ? (<p>{error.message}</p>) : null}
                {result.loaded ? (<p>{result.message}</p>) : null}
            </div>
        </div>
    )
}
export default ResetPassword