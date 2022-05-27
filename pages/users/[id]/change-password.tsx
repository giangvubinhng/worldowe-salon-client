import React, { useState } from 'react';
import { changePassword } from '../../../services/user.service';
const PasswordChange = () => {

    const [input, setInput] = useState({
        oldPassword: '',
        password: '',
        confirmPassword: ''
    });

    // const [error, setError] = useState({
    //     oldPassword: '',
    //     password: '',
    //     confirmPassword: ''
    // });

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInput(prev => ({
          ...prev,
          [name]: value
        }));
    }

    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      changePassword(input.oldPassword, input.password);
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
            </div>
        </div>
    );
}
export default PasswordChange;