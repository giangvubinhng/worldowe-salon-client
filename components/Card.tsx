import { NextPage } from 'next';
import { Col } from 'react-bootstrap';
import { Card as BCard, Button } from 'react-bootstrap';
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
					<div className={styles.flexboxContainer}>
						
						<div className={styles.leftBox}>
							{/* <style jsx>{`
        					.leftBox{
          						display: list-items;
        					}
      						`}</style> */}
							<BCard.Title>{shop.shop_name}</BCard.Title>
							<BCard.Text>
								{shop.street}, {shop.city}, {shop.state}, {shop.zip}, {shop.country}
							</BCard.Text>
							<a target="_blank" href={`/shops/${shop.id}`} rel="noopener noreferrer">
								<Button className={styles.Button}>Go To Shop</Button></a>
						</div>
						<div className={styles.photo}>
							<img src="https://source.unsplash.com/user/c_v_r" alt="Free unsplash image" width={200} height={200}></img>
						</div>
					</div>
				</BCard.Body>
			</BCard>
		</div>
	);
};

export default Card;
