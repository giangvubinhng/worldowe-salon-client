import { NextPage } from "next";
import { sendEmailForgetPassword } from '@/services/user.service';
import { Modal } from 'react-bootstrap'
import { useState } from 'react';

interface props {
	bookClicked: boolean
	hideClicked: any
}
type ResultReponse = {
	success: boolean;
	message: string;
}

const CreateBooking: NextPage<props> = ({ bookClicked, hideClicked }) => {
	const [state, setState] = useState({
		forgotEmail: ''
	});
	const [result, setResult] = useState({ success: false, message: '' })
	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setState({
			...state,
			[name]: value,
		});
	};
	const sendBooking = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {

			const currResult = await sendEmailForgetPassword(state.forgotEmail) as ResultReponse;
			if (currResult) {
				setResult(currResult);
			}
		}
		catch (e: unknown) {
			setResult({ success: false, message: "An error has occurred" });
		}


	}
	return (
		<>
			<Modal size="lg" centered show={bookClicked} onHide={() => hideClicked(false)}>
				<Modal.Body>
					<p>Book here
					</p>
				</Modal.Body>
			</Modal>
		</>
	);
};
export default CreateBooking;
