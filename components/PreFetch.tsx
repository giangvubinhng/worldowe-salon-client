import {NextPage} from "next";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {fetchCurrentUserAsync} from "../features/userSlice";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "@/styles/prefetch.module.css";
const PreFetch: NextPage = ({children}) => {
	const user = useAppSelector((state) => state.user.value);
	const [isLoaded, setIsLoaded] = useState(false)
	// You can use hooks here
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchCurrentUserAsync());
		setIsLoaded(true)
	}, [dispatch]);
	return (
		<div className={styles.main}>
			<div className={styles.navContainer}>
				<Navbar user={user} isLoaded={isLoaded} />
			</div>
			<div className={styles.bodyContainer}>
				<main>{children}</main>
			</div>
			<div className={styles.footerContainer}>
				<Footer />
			</div>
		</div>
	);
};
export default PreFetch;
