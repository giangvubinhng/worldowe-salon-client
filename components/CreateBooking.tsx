import { NextPage } from "next";
import { createBooking, sendEmailForgetPassword } from '@/services/user.service';
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

	const [error, setError] = useState('');

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const bookingInfo = {
			firstname: state.firstname,
			lastname: state.lastname,
			email: state.email,
			phone: state.phone,
			data: state.date,
			time: state.time,
			staff: state.staff,
			message: state.message,
		}
		try {
			const result = await createBooking(bookingInfo);
			if (!result.success) {
				setError(result.message);
			}
		} catch (e) {
			return e
		}
	};

	return (
		<>
			<Modal size="xl" centered show={bookClicked} onHide={() => hideClicked(false)}>
				<Modal.Body>
					<form id="lost-form" onSubmit={onSubmit}>
						<h4>Client Infomation</h4>
						<div className={styles.column}>
							<label>First Name</label>
							<input type="input" className={styles.input} placeholder="Enter First Name" required></input>
							<label>Last Name</label>
							<input type="input" className={styles.input} placeholder="Enter Last Name" required></input>
							<label>Email</label>
							<input type="email" className={styles.input} placeholder="Enter Email" required></input>
							<label>Phone</label>
							<input type="tel" className={styles.input} placeholder="Enter Phone Number" required></input>
						</div>
						<h4>Appoinment Detail</h4>
						<div className={styles.column}>
							<label className={styles.label}>Date</label>
							<input type="date" className={styles.input} required></input>
							<label>Time</label>
							<input type="time" className={styles.input} required></input>
							<label>Staff</label>
							<select className={styles.input} id="staffs" name="staffs"><option>No preference</option></select>
							<label>Appoinment Note</label>
							<input type="input" className={styles.input} placeholder="(Optional)"></input>
						</div>
						<button className={`btn btn-dark`}>Book an appoiment</button>
					</form>
				</Modal.Body>
			</Modal>
		</>
	);
};
export default CreateBooking;
