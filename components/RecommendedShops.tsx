
import React from "react";
import {NextPage} from "next";
import GeneralCard from "./GeneralCard";
import {IShopBody} from "@/interfaces/IShop";
import styles from '@/styles/recommendedShops.module.css'
import { Col, Container, Row } from "react-bootstrap";

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
				? (
					<div className={styles.cardContainer}>
					<Container fluid="lg">
					<Row lg={3}>

						{shops.map((shop: IShopBody, index: number ) => (
						<Col key={index}>
						<GeneralCard title={shop.shop_name} info={shop.street}  key={shop.id} routeTo={`/shops/${shop.id}`}/></Col>
				))}</Row></Container></div>)
				: null}
			{shops && shops.length === 0 ? (<p>No shop found</p>) : null}
		</div>
	);
};

export default RecommendedShops;