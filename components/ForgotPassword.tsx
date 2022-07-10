import {NextPage} from "next";
import {sendEmailForgetPassword} from '@/services/user.service';
import {Modal} from 'react-bootstrap'
import {useState} from 'react';

interface props {
	forgotClicked: boolean
	hideClicked: any
}
type ResultReponse = {
	success:   boolean;
	message: string;
}

const ForgotPassword: NextPage<props> = ({forgotClicked, hideClicked}) => {
	const [state, setState] = useState({
		forgotEmail: ''
	});
	const [result, setResult] = useState({success: false, message: ''})
	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const {name, value} = e.target;
		setState({
			...state,
			[name]: value,
		});
	};
	const sendForgotPassword = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try{

			const currResult = await sendEmailForgetPassword(state.forgotEmail) as ResultReponse;
			if(currResult){
				setResult(currResult);
			}
		}
		catch(e: unknown){
			setResult({success: false, message: "An error has occurred"});
		}


	}
	return (
		<>
			<Modal size="sm" centered show={forgotClicked} onHide={() => hideClicked(false)}>
				<Modal.Body>
					<form id="lost-form" onSubmit={sendForgotPassword}>
						<div className="modal-body">
							<div id="div-lost-msg">
								<div id="icon-lost-msg" className="glyphicon glyphicon-chevron-right"></div>
								<h3>Forgot Password?</h3>
							</div>
							<label>Forgot/Lost your password? Please enter your email address. You will receive a link to create a new password via email.</label>
						</div>
						<div className="modal-footer">
							<input type="email" name="forgotEmail" className="form-control" value={state.forgotEmail} onChange={onInputChange} placeholder="Enter Email" required></input>
							{result.success ? (<p>{result.message}</p>) : null}
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
