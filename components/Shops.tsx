import React from "react";
import {NextPage} from "next";
import Card from "../components/Card";
import {IShopBody} from "../interfaces/IShop";

interface props {
	data: any;
	loading: boolean;
	error: any
}
const Shops: NextPage<props> = ({data, loading, error}) => {

	return (
		<div>
			{loading
				? (<p>loading...</p>) : null}
			{error
				? (<p>Error</p>) : null}

			{data
				? data.shops.map((shop: IShopBody) => (
					<Card shop={shop} key={shop.id} />
				))
				: null}
		</div>
	);
};

export default Shops;
