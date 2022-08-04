import { NextPage } from "next";
import { sendEmailForgetPassword } from '@/services/user.service';
import { Modal } from 'react-bootstrap'
import { useState } from 'react';
import styles from '../styles/CreateBooking.module.css'
import { Button } from "react-bootstrap/lib/InputGroup";

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
		firstname: '',
		lastname: '',
		email: '',
		phone: '',
		date: '',
		time: '',
		staff: '',
		message: ''
	});
	const [result, setResult] = useState({ success: false, message: '' })
	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setState({
			...state,
			[name]: value,
		});
	};

	return (
		<>
			<Modal size="xl" centered show={bookClicked} onHide={() => hideClicked(false)}>
				<Modal.Body>
					<form id="lost-form">
						<h4>Client Infomation</h4>
						<div className={styles.column}>
							<label>First Name</label>
							<input type="input" className={`form-control ${styles.input}`} placeholder="Enter First Name" required></input>
							<label>Last Name</label>
							<input type="input" className={`form-control ${styles.input}`} placeholder="Enter Last Name" required></input>
							<label>Email</label>
							<input type="email" className={`form-control ${styles.input}`} placeholder="Enter Email" required></input>
							<label>Phone</label>
							<input type="tel" className={`form-control ${styles.input}`} placeholder="Enter Phone Number" required></input>
						</div>
						<h4>Appoinment Detail</h4>
						<div className={styles.column}>
							<label>Date</label>
							<input type="date" className={`form-control ${styles.input}`} required></input>
							<label>Time</label>
							<input type="time" className={`form-control ${styles.input}`} required></input>
							<label>Staff</label>
							<select id="staffs" name="staffs" className="dropdown">
								<option value="giang">No preference</option>
							</select>
							<label>Appoinment Note</label>
							<input type="input" className={`form-control ${styles.input}`} placeholder="(Optional)"></input>
						</div>
						<button className={`btn btn-dark`}>Book an appoiment</button>
					</form>
				</Modal.Body>
			</Modal>
		</>
	);
};
export default CreateBooking;
