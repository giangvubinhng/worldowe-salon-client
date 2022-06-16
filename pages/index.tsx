import type { NextPage } from 'next';
import { useState } from 'react';
import {useRouter} from "next/router"
import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { Form, FormControl, Button } from 'react-bootstrap';

const Home: NextPage = () => {
	// Declare variables and states
	const router = useRouter()
	const [searchQuery, setSearchQuery] = useState('');

	// Functions
	const handleSearch = async (e: any) => {
		e.preventDefault();
		router.push(`/shops/search?name=${searchQuery}`)
	};
	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setSearchQuery(e.target.value);
	};
	return (
		<div>
			<Head>
				<title>Home</title>
				<meta name="Worldowe-Home" content="Worldowe, Connect anywhere and everywhere" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<Form className="d-flex" onSubmit={handleSearch}>
					<FormControl
						type="search"
						placeholder="Search"
						className="me-2"
						aria-label="Search"
						onChange={onInputChange}
					/>
					<Button variant="outline-success" type="submit">
						Search
					</Button>
				</Form>
			</main>
		</div>
	);
};

export default Home;
