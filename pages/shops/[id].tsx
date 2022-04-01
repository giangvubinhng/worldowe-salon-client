import styles from '../../styles/ShopDetail.module.css';
import axios from 'axios'
import {useQuery} from "@apollo/client";
import client from "../../Apollo/client"
import {GET_SHOPS} from "../../graphql/shopQueries";
import {ApolloClient, InMemoryCache} from '@apollo/client';

const ShopPage = () => {
	return (
		<div className={styles.container}>
			Sup
		</div>
	)

}
// https://github.com/vercel/next.js/blob/canary/examples/with-apollo/lib/apolloClient.js 
// maybe this will work.. too lazy to do rn
export async function getStaticProps() {
}

export async function getStaticPaths() {
	const {loading, error, data} = await client.query({query: GET_SHOPS});
	return {
		paths: data.map((r: any) => {
			return {
				params: {
					id: r.id
				},
				fallback: false,
			}
		})
	}

}

export default ShopPage
