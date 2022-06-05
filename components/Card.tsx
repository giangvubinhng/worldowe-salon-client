import { NextPage } from 'next';
import { Card as BCard, Button} from 'react-bootstrap';
import { IShopBody } from '../interfaces/IShop';
import styles from '../styles/Card.module.css';

interface props {
	shop: IShopBody;
}

const Card: NextPage<props> = ({ shop }) => {

	return (
		<div>
			<BCard className={styles.Bcard}>
				<BCard.Body>
					<BCard.Title>{shop.shop_name}</BCard.Title>
					<BCard.Text>
						{shop.street}, {shop.city}, {shop.state}, {shop.zip}, {shop.country}
					</BCard.Text>
					<a target="_blank" href={`/shops/${shop.id}`} rel="noopener noreferrer">
						<Button className={styles.Button}>Go To Shop</Button></a>
				</BCard.Body>
			</BCard>
		</div>
	);
};

export default Card;
