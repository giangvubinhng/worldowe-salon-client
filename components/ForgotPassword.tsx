import styles from '@/styles/ForgotPassword.module.css';
import { NextPage } from "next";
import { forgetPassword } from '@/services/user.service';
import { Modal } from 'react-bootstrap'
import { useState } from 'react';

// import { useRouter } from "next/router"
// const Header = () => {
//   const router = useRouter()
//   return (
//     <header>
//       <button onClick={() => router.back()}>Back</button>
//       <nav>
//         <a href="/">Home</a>
//       </nav>
//     </header>
//   )
// }
// export default Header

const ForgotPassword = () => {
    const [state, setState] = useState({
        email: '',
        password: '',
        forgotEmail: ''
    });
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        });
    };
    const sendForgotPassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = forgetPassword(state.forgotEmail)
    }
    const [forgotClicked, setForgotClicked] = useState(false);
    return (
        <><button className={styles.AllBtn} onClick={() => setForgotClicked(true)}>Forgot password?</button>
            <Modal size="sm" centered show={forgotClicked} onHide={() => setForgotClicked(false)}>
                <Modal.Body>
                    <form id="lost-form">
                        <div className="modal-body">
                            <div id="div-lost-msg">
                                <div id="icon-lost-msg" className="glyphicon glyphicon-chevron-right"></div>
                                <h3>Forgot Password?</h3>
                            </div>
                            <label>Lost your password? Please enter your email address. You will receive a link to create a new password via email.</label>
                        </div>
                        <div className="modal-footer">
                        <input type="email" name="forgotEmail" className="form-control" value={state.forgotEmail} onChange={onInputChange} placeholder="Enter Email" required></input>
                            <div>
                                <button type="submit" className="btn btn-dark btn-lg btn-block">Send</button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
};
export default ForgotPassword;