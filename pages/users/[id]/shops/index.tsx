import {NextPage} from "next";
import Link from 'next/link'
import {useQuery} from "@apollo/client";
import {GET_MY_SHOPS} from "../../../../graphql/shopQueries";
import {IShopBody} from "../../../../interfaces/IShop";

const MyShops: NextPage = () => {
	const {loading, error, data} = useQuery(GET_MY_SHOPS, {fetchPolicy: 'cache-and-network'} );
	return (<div>
		<h2>This is My Shop</h2>
		<Link href='/shops/create'>Create a new Shop</Link>
		{loading && <h5>is loading..</h5>}
		{error && <h5>error</h5>}

		{data
			? data.myShops.map((shop: IShopBody) => (
			<h4 key={shop.id}>{shop.shop_name}</h4>))
			: null}
	</div>)
};

export default MyShops;

