import React, { FC, useState } from 'react';
import { GetServerSideProps } from 'next';
import { ProtectedRoute } from '@/components/HOC/ProtectedRoute';
import { useAppSelector } from "../app/hooks";
import Link from 'next/link';
import { uploadProfilePic } from '@/services/upload.service'
import styles from '@/styles/account.module.css'

const URI = 'http://localhost:5000'

const Account: FC = () => {

	const user = useAppSelector((state) => state.user.value);

	const [file, setFile] = useState<string | Blob>('');

	const [uploadSuccess, setUploadSuccess] = useState<any>({});
	const handleUpload = async (e: any) => {
		e.preventDefault();
		const result = await uploadProfilePic(file);
		if (result) {
			setUploadSuccess(result)
		}
	}

	const onInputChange = (e: any) => {
		setFile(e.target.files[0])
	}

	return (
		<div className={styles.bodyContainer}>
			<div className="container emp-profile">
				<div className="padding">
					<div className="row container d-flex justify-content-center">
						<div className="row m-1-0 m-r-0">
							<div className="col-xl-4 col-md-12">
								<div className="col-sm-4">
									<div className="card-block text-center text-white">
										<img src={`${URI}${user.profile_image}`} height="250" width="250" className="styles.avatar"></img>
										<form onSubmit={handleUpload}>
											<input type="file" name="profile_pic" onChange={onInputChange} />
											<button type="submit">Update profile picture</button>
										</form>
										{uploadSuccess.success ? <p>{uploadSuccess.message}</p> : null}
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="profile-head">
									<h5>Bio</h5>
									<div className="profile-rating mt-3 mb-5">
										<div className="row">
											<div className="col-md-4">
												<label>First Name: </label>
											</div>
											<div className="col-md-6">
												<label>{user.first_name}</label>
											</div>
											<div className="col-md-4">
												<label>Last Name: </label>
											</div>
											<div className="col-md-6">
												<label>{user.last_name}</label>
											</div>
											<div className="col-md-4">
												<label>Email Address: </label>
											</div>
											<div className="col-md-6">
												<label>{user.email}</label>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Account;

export const getServerSideProps: GetServerSideProps = ProtectedRoute(
	async (ctx) => {
		return {
			props: {

			},
		}
	}
)
