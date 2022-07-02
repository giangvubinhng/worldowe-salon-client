import { NextPage } from 'next';
import { Card, Button } from 'react-bootstrap';
import styles from '@/styles/generalCard.module.css'
interface props {
    title: string;
    info: string;
    image?: string;
    routeTo?: string;
    buttonName?: string;
}

const GeneralCard: NextPage<props> = (props) => {

	return (
		<div className={styles.container}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.mountsinai.on.ca/wellbeing/images/image-placeholder/image" />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {props.info}
                        </Card.Text>
                        {props.buttonName ? (
                            <a target="_blank" href={`${props.routeTo}`} rel="noopener noreferrer">
                                <Button variant="primary">{props.buttonName}</Button>
                            </a>
                        ) : null }
                    </Card.Body>
                </Card>
		</div>
	);
};

export default GeneralCard;
