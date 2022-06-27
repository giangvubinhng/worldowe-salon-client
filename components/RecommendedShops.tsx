
import React from "react";
import {NextPage} from "next";
import GeneralCard from "./GeneralCard";
import {IShopBody} from "@/interfaces/IShop";
import styles from '@/styles/recommendedShops.module.css'

interface props {
	shops?: IShopBody[];
	loading?: boolean;
	error?: any
}
const RecommendedShops: NextPage<props> = ({shops, loading, error}) => {

	return (
		<div className={styles.container}>
			{loading
				? (<p>loading...</p>) : null}
			{error
				? (<p>Error</p>) : null}

			{shops && shops.length > 0
				? shops.map((shop: IShopBody) => (
					<GeneralCard title={shop.shop_name} info={shop.street}  key={shop.id}/>
				))
				: null}
			{shops && shops.length === 0 ? (<p>No shop found</p>) : null}
		</div>
	);
};

export default RecommendedShops;