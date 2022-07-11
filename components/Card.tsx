import { NextPage } from 'next';
import { CardImg, Col } from 'react-bootstrap';
import { Card as BCard, Button } from 'react-bootstrap';
import { IShopBody } from '@/interfaces/IShop';
import styles from '@/styles/Card.module.css';

interface props {
	shop?: IShopBody;
	link?: string;
	title?: string;
	description?: string;
	photo? : string;
}

const Card: NextPage<props> = ({ shop, title, description, photo }) => {
	if(shop){
		return (
			<div>
				<a target="_blank" href={`/shops/${shop.id}`} rel="noopener noreferrer" className={styles.link}>
					<BCard className={styles.Bcard}>
						<BCard.Body>
							<div className={styles.flexboxContainer}>
								<div className={styles.leftBox}>
									<BCard.Title className={styles.title}>{shop.shop_name}</BCard.Title>
									<BCard.Text className={styles.info}>
										{shop.street}, {shop.city}, {shop.state}, {shop.zip}, {shop.country}
									</BCard.Text>
								</div>
								<div className={styles.photo}>
									<img src="https://img.freepik.com/premium-vector/beauty-salon-color-illustration-hair-stylist-workplace-room-make-up-artist-barbershop-table-cosmetology-parlor-cartoon-interior-with-mirrors-armchairs-background_151150-1303.jpg?w=2000" alt="Free unsplash image" className={styles.CardPhoto}></img>
								</div>
							</div>
						</BCard.Body>
					</BCard>
				</a>
			</div>
		);
	}
	return (
			<div>
					<BCard className={styles.Bcard}>
						<BCard.Body>
							<div className={styles.flexboxContainer}>
								<div className={styles.leftBox}>
									<BCard.Title className={styles.title}>{title}</BCard.Title>
									<BCard.Text className={styles.info}>
										{description}
									</BCard.Text>
								</div>
								{photo ? 
									(<div className={styles.photo}>
										<img src={photo} alt="Free unsplash image" className={styles.PersonPhoto}></img>
									</div>) : null
								}
							</div>
						</BCard.Body>
					</BCard>
			</div>
)

};

export default Card;
