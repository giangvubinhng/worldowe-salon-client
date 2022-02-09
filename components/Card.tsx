import {NextPage} from 'next';
import {useRouter} from 'next/router'
import Link from "next/link"
import {Card as BCard, Button} from 'react-bootstrap';
import {IShopBody} from '../interfaces/IShop';
import ShopDetail from '../pages/shop/[id]'

import Modal from 'react-modal';

Modal.setAppElement('#__next');
interface props {
	shop: IShopBody;
}

const Card: NextPage<props> = ({shop}) => {
	const router = useRouter();
	return (
		<div>
			<BCard style={{width: '18rem'}}>
				<BCard.Body>
					<BCard.Title>{shop.shop_name}</BCard.Title>
					<BCard.Text>
						{shop.street}, {shop.city}, {shop.state}, {shop.zip}, {shop.country}
					</BCard.Text>
					<Link href={`/?id=${shop.id}`} as={`/shop/${shop.id}`}>Go To Shop</Link>
				</BCard.Body>
			</BCard>
			<Modal isOpen={!!router.query.id} onRequestClose={() => router.push("/")}>
				<ShopDetail />
			</Modal>
		</div>
	);
};

export default Card;
