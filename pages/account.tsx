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
			<div className="top">
				<div className="user-profile">
					<div className={styles.userPhoto}>
						<img src={`${URI}${user.profile_image}`} height="250" width="250" className="styles.avatar"></img>
					</div>

					<div>
						<a>
							<span></span>
							<form onSubmit={handleUpload}>
								<input type="file" name="profile_pic" onChange={onInputChange} />
								<button type="submit" >Update profile picture</button>
							</form>
							{uploadSuccess.success ? <p>{uploadSuccess.message}</p> : null}
						</a>
					</div>
				</div>

				<div>
					<h3>Shop's info</h3>
					<div className={styles.userInfo}>
						<p>First Name: </p>
						<p>{user.first_name}</p>
						<p>Last Name: </p>
						<p>{user.last_name}</p>
						<p>Email Address: </p>
						<p>{user.email}</p>
					</div>

					<div>
						{user.user_id ? (<Link href={`/users/${user.user_id}/change-password`}>Change Password</Link>) : null}
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
