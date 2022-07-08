import { NextPage } from 'next';
import { Card, Button } from 'react-bootstrap';
import styles from '@/styles/generalCard.module.css'
interface props {
    title: string;
    info: string;
    image?: string;
    routeTo?: string;
}

const GeneralCard: NextPage<props> = (props) => {

	return (
		<div className={styles.container}>
                <Card style={{ width: '18rem' }} className={styles.Card}>
                <a className={styles.link} target="_blank" href={`${props.routeTo}`} rel="noopener noreferrer">
                    <Card.Img variant="top" src="https://www.mountsinai.on.ca/wellbeing/images/image-placeholder/image" />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {props.info}
                        </Card.Text>
                    </Card.Body>
                </a>
                </Card>
		</div>
	);
};

export default GeneralCard;
