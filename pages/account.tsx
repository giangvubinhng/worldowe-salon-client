import React, {FC} from 'react';
import {useAppSelector} from "../app/hooks";

import Link from 'next/link';


const Account: FC = () => {

	const user = useAppSelector((state) => state.user.value);
	// You can use hooks here
	// const dispatch = useAppDispatch();
	// useEffect(() => {
	// 	dispatch(fetchCurrentUserAsync());
	// }, [dispatch]);



	return (
		<div>
			<div className="top">
				<div className="user-profile">
					<div className="user-photo">
						<img src="https://www.lenco-marine.com/wp-content/uploads/2021/04/user.png" height="250" width="250"></img>
					</div>

					<div>
						<a>
							<span></span>
							<span>Add a profile picture</span>
						</a>
					</div>
				</div>

				<div>
					<h3>Shop's info</h3>
					<div>
						<p>Account</p>
						<p>{user.first_name}</p>
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
