import React, {useEffect} from "react";
import {useQuery} from "@apollo/client";
import {GET_SHOPS} from "../graphql/shopQueries";
import {NextPage} from "next";
import Card from "../components/Card";
import {IShopBody} from "../interfaces/IShop";

interface props {
	clicked: boolean;
}
const Shops: NextPage<props> = ({clicked}) => {
	const {loading, error, data} = useQuery(GET_SHOPS, {skip: !clicked, fetchPolicy: 'cache-and-network'});
	return (
		<div>
			{data
				? data.shops.map((shop: IShopBody) => (
					<Card shop={shop} key={shop.id} />
				))
				: null}
		</div>
	);
};

export default Shops;
