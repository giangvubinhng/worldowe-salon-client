import { NextPage } from 'next';
import { useRouter } from 'next/router'
import Link from "next/link"
import { Card as BCard, Button, Modal } from 'react-bootstrap';
import { IShopBody } from '../interfaces/IShop';
import ShopDetail from '../pages/shops/[id]'
import { useState } from "react"
import styles from '../styles/Card.module.css';

interface props {
	shop: IShopBody;
}

const Card: NextPage<props> = ({ shop }) => {
	const router = useRouter();
	return (
		<div>
			<BCard className={styles.Bcard}>
				<BCard.Body>
					<BCard.Title>{shop.shop_name}</BCard.Title>
					<BCard.Text>
						{shop.street}, {shop.city}, {shop.state}, {shop.zip}, {shop.country}
					</BCard.Text>
					<Link href={`/?id=${shop.id}`} as={`/shops/${shop.id}`}>
						<Button className={styles.Button}>Go To Shop</Button></Link>
				</BCard.Body>
			</BCard>
			<Modal
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
				show={!!router.query.id}
				onHide={() => router.push("/")}
			>
				<Modal.Body>
					<ShopDetail />
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default Card;
