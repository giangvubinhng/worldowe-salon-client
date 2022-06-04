import { NextPage } from "next";
import { Card as BCard, Button } from 'react-bootstrap';
import Link from "next/link"
import { useRouter } from 'next/router'
import { useQuery } from "@apollo/client";
import { GET_MY_SHOPS } from "../../../../graphql/shopQueries";
import { IShopBody } from "../../../../interfaces/IShop";
import ShopPage from "../../../shops/[id]";
import styles from '../../../../styles/MyShop.module.css';

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
		{loading && <h5>is loading..</h5>}
		{error && <h5>error</h5>}
		{data ? data.myShops.map((shop: IShopBody) => (
			<BCard className={styles.Bcard}>
				<BCard.Body>
					<BCard.Title>{shop.shop_name}</BCard.Title>
					<BCard.Text>
						{shop.street}, {shop.city}, {shop.state}, {shop.zip}, {shop.country}
					</BCard.Text>
					<Link href={`/?id=${shop.id}`} as={`/shops/${shop.id}`}>
						<Button className={styles.Button}>Go To Shop</Button>
					</Link>
				</BCard.Body>
			</BCard>
		)) : null}
	</div>)
};
export default MyShops;

