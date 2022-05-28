import type { NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import {GET_SHOPS} from "../graphql/shopQueries";
import styles from '../styles/Home.module.css';
import { Form, FormControl, Button } from 'react-bootstrap';
import Shops from '../components/Shops';
import {initializeApollo} from '../Apollo/client'

const Home: NextPage = () => {
	const client= initializeApollo()
	const [searchQuery, setSearchQuery] = useState('');
	const [result, setResult] = useState();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState();
	const handleSearch = async (e: any) => {
		const {loading, error, data} = await client.query({query: GET_SHOPS, variables: {name: searchQuery}})
		setResult(data);
		setLoading(loading);
		setError(error)
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
					<Button variant="outline-success" onClick={handleSearch}>
						Search
					</Button>
				</Form>
				<h2>Shops</h2>
				<Shops data={result} loading={loading} error={error}/>
			</main>
		</div>
	);
};

export default Home;
