import { changePassword } from '@/services/user.service';


const PasswordChange = () => {
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
                <button className='btn btn-dark'>Done</button>
            </form>
            {error.hasError ? (<p>{error.message}</p>) : null}
            {result.loaded ? (<p>{result.message}</p>) : null}
        </div>
    </div>

);