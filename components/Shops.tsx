import React from "react";
import {NextPage} from "next";
import Card from "../components/Card";
import {IShopBody} from "../interfaces/IShop";

interface props {
	shops: any;
	loading: boolean;
	error: any
}
const Shops: NextPage<props> = ({shops, loading, error}) => {

	return (
		<div>
			{loading
				? (<p>loading...</p>) : null}
			{error
				? (<p>Error</p>) : null}

			{shops && shops.length > 0
				? shops.map((shop: IShopBody) => (
					<Card shop={shop} key={shop.id}/>
				))
				: null}
			{shops && shops.length === 0 ? (<p>No shop found</p>) : null}
		</div>
	);
};

export default Shops;
