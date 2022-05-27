import React, { useState } from 'react';
const PasswordChange = () => {

    const [input, setInput] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    });
    return (
        <div>
            <div>
                <form>
                    <div>
                        <label>Old Password</label>
                        <input type="password" name="username" value={input.username}></input>
                    </div>

                    <div>
                        <label>New Password</label>
                        <input type="password"></input>
                    </div>

                    <div>
                        <label>Confirm Password</label>
                        <input type="password"></input>
                    </div>

                    <button>Change Password</button>
                </form>
            </div>
        </div>
    );
}
export default PasswordChange;