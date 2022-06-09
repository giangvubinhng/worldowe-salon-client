import {NextPage} from "next";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {fetchCurrentUserAsync} from "../features/userSlice";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/prefetch.module.css";
const PreFetch: NextPage = ({children}) => {
	const user = useAppSelector((state) => state.user.value);
	// You can use hooks here
	const [isLoading, setIsLoading] = useState(true)

	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchCurrentUserAsync());
		setIsLoading(false)
	}, [dispatch]);
	return (
		<div className={styles.main}>
			<div className={styles.navContainer}>
				<Navbar user={user} isLoading={isLoading} />
			</div>
			<div className={styles.bodyContainer}>
				<div className={styles.innerBodyContainer}>
					<main>{children}</main>
				</div>
			</div>
			<div className={styles.footerContainer}>
				<Footer />
			</div>
		</div>
	);
};
export default PreFetch;
