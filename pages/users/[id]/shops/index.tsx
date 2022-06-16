import { NextPage } from "next";
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router'
import { useQuery } from "@apollo/client";
import { AuthorizedRoute } from "@/components/HOC/AuthorizedRoute";
import { GetServerSideProps } from 'next';
import { GET_MY_SHOPS } from "@/graphql/shopQueries";
import styles from '@/styles/MyShop.module.css';
import Shops from "@/components/Shops";

const MyShops: NextPage = () => {
	const router = useRouter()
	const { loading, error, data } = useQuery(GET_MY_SHOPS, { fetchPolicy: 'cache-and-network' });
	const createShopClick = (e: any) => {
		e.preventDefault()
		router.push(`/shops/create`)
	}
	return (<div>
		<h2 className={styles.h2}>
			This is My Shop
			<Button className={styles.createButton} variant="outline-success" type="submit" onClick={createShopClick}>Create a new Shop</Button>
		</h2>
		{data && <div className={styles.cardContainer}><Shops shops={data.myShops} loading={loading} error={error}/></div>}
	</div>)
};
export default MyShops;


export const getServerSideProps: GetServerSideProps = AuthorizedRoute(
	async (ctx) => {
		return {
			props: {

			},
		}
	}
)