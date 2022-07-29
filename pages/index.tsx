import type { NextPage } from 'next';
import { useState } from 'react';
import {useRouter} from "next/router"
import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { Form, FormControl, Button } from 'react-bootstrap';
import homeImage from "@/public/hero.png"
import { GetStaticProps } from 'next';
import {initializeApollo} from '@/Apollo/client'
import {GET_SHOPS} from "@/graphql/shopQueries";
import { IShopBody } from '@/interfaces/IShop';
import RecommendedShops from '@/components/RecommendedShops'
import About from '@/components/About'

interface props{
	shops: IShopBody[];
}
const Home: NextPage<props> = ({shops}) => {
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
				<section className={styles.hero}>
					<div className={styles.background}>
						<img className={styles.srcImg} src={homeImage.src} alt="" />
					</div>
					<div className={styles.content}>
						<div className={styles.text}>
							<h1 className={styles.title}>WORLDOWE</h1>
							<p className={styles.info}>
								Locate your nearest salons
							</p>
						</div>
						<div className={styles.searchContainer}>
							<Form className="d-flex" onSubmit={handleSearch}>
								<FormControl
									type="search"
									placeholder="Search"
									className={`me-2 ${styles.searchBar}`}
									aria-label="Search"
									onChange={onInputChange}
								/>
								<Form.Select
									aria-label="Search"
									className={`me-2 ${styles.optionBar}`}
									size="sm"
								>
									<option>Hair Salon</option>
									<option>Nail Salon</option>
									<option>Spa</option>
								</Form.Select>
								<Button variant="outline-success" type="submit">
									Search
								</Button>
							</Form>
						</div>

					</div>
				</section>
				<section className={styles.section}>
					<div className={styles.shopsContainer}>
						<div className={styles.titleContainer}>
							<h2 className={styles.sectionName}>Recommended Salons Around You</h2>
						</div>
						<RecommendedShops shops={shops}/>
					</div>
				</section>
				<section className={styles.section}>
					<div>
						<About/>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
	const prefetch = false;
	const client = initializeApollo(null, prefetch);
    const {data} = await client.query({query: GET_SHOPS, variables: {name: "Giang"}})
	return {
		props: {
			shops: data.shops 
		}
	}
}
