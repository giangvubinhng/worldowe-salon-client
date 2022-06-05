import {NextPage} from "next";
import {Button} from 'react-bootstrap'
import { useRouter } from 'next/router'
import {useQuery} from "@apollo/client";
import {GET_MY_SHOPS} from "../../../../graphql/shopQueries";
import {IShopBody} from "../../../../interfaces/IShop";

const MyShops: NextPage = () => {
	const router = useRouter()
	const {loading, error, data} = useQuery(GET_MY_SHOPS, {fetchPolicy: 'cache-and-network'} );
	const createShopClick = (e: any) =>{
		e.preventDefault()
		router.push(`/shops/create`)
	}
	return (<div>
		<h2>This is My Shop</h2>
		<Button variant="primary" onClick={createShopClick}>Create a new Shop</Button>
		{loading && <h5>is loading..</h5>}
		{error && <h5>error</h5>}

		{data
			? data.myShops.map((shop: IShopBody) => (
			<h4 key={shop.id}>{shop.shop_name}</h4>))
			: null}
	</div>)
};

export default MyShops;

