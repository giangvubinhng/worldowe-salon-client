import { NextPage } from 'next';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchCurrentUserAsync } from '../features/userSlice';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/prefetch.module.css';
const PreFetch: NextPage = ({ children }) => {
	const user = useAppSelector((state) => state.user.value);
	// You can use hooks here
	const dispatch = useAppDispatch();
	useEffect(() => {
		console.log('fetched');
		dispatch(fetchCurrentUserAsync());
	}, [dispatch]);
	return (
		<div className={styles.main}>
			<Navbar user={user} />
			<main>{children}</main>
			<Footer />
		</div>
	);
};
export default PreFetch;
