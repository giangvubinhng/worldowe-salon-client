import styles from '../../styles/ShopDetail.module.css';
import axios from 'axios'
import {useQuery} from "@apollo/client";
import {GET_SHOPS} from "../../graphql/shopQueries";

const ShopPage = () => {
	return (
		<div className={styles.container}>
			Sup
		</div>
	)

}
export async function getStaticProps() {
}

export async function getStaticPaths() {
	const {loading, error, data} = useQuery(GET_SHOPS);
	return {
		paths: data.map((r: any) => {
			return {
				params: {
					id: r.id
				}
			}
		})
	}

}

export default ShopPage
