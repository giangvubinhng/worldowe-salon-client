import { NextPage } from 'next';
import { Card as BCard, Button } from 'react-bootstrap';
import { IShopBody } from '../interfaces/IShop';

interface props {
	shop: IShopBody;
}

const Card: NextPage<props> = ({ shop }) => {
	return (
		<div>
			<BCard style={{ width: '18rem' }}>
				<BCard.Body>
					<BCard.Title>{shop.shop_name}</BCard.Title>
					<BCard.Text>
						{shop.street}, {shop.city}, {shop.state}, {shop.zip}, {shop.country}
					</BCard.Text>
					<Button variant="primary">Go To Shop</Button>
				</BCard.Body>
			</BCard>
		</div>
	);
};

export default Card;
