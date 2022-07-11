import {GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage} from 'next';
import {initializeApollo} from '@/Apollo/client'
import styles from '@/styles/ShopDetail.module.css';
import {GET_CURRENT_SHOP, GET_SHOPS} from "@/graphql/shopQueries";
import {IShopBody} from '@/interfaces/IShop';
import {useAppSelector} from '@/app/hooks'
import {Offcanvas, Container, Row, Col, Button, Carousel, ListGroup, Badge} from 'react-bootstrap';
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from '@/components/Card'

interface props {
	shop: IShopBody
}
//doc : https://github.com/vercel/next.js/blob/canary/examples/with-apollo/lib/apolloClient.js

const ImageURL = "https://img.freepik.com/premium-vector/beauty-salon-color-illustration-hair-stylist-workplace-room-make-up-artist-barbershop-table-cosmetology-parlor-cartoon-interior-with-mirrors-armchairs-background_151150-1303.jpg?w=2000"
const ImageURL1 = "https://media.istockphoto.com/photos/modern-living-salon-interior-3d-render-image-picture-id959923330?b=1&k=20&m=959923330&s=170667a&w=0&h=Bhr6j839cb1fbORT4vMymESX6B7PqHbJtR7RRl8OI94="
const ImageURL2 = "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJlYXV0eSUyMHNhbG9ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
const ImageURL3 = "https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
const PROFILE_PIC = "https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-9/138221343_1762256757282908_5813164246551012056_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=prak6m8l4q0AX_136SH&_nc_oc=AQkhsEunBbzsrLepY8ZkF9sfao9kXQHnHWY5h2oP9lrYw653BSIwvT23wpwSQuLi_FU&tn=ZuITXcjMUJcVJ6d5&_nc_ht=scontent-iad3-1.xx&oh=00_AT-8SOyaxN0GIysPy0ALnJ8Ua2TsUw74DQ0mAvNlmJ1jdw&oe=62EFED84"
const ShopPage: NextPage<props> = ({shop}) => {
	const user = useAppSelector((state) => state.user.value);
	const admin = parseInt(user.user_id) === shop.user_id;
	const [showCanvas, setShowCanvas] = useState(false);
	const handleCloseCanvas = () => setShowCanvas(false);
	const handleShowCanvas = () => setShowCanvas(true);
	// const [admin, setAdmin] = useState(false);
	// useEffect(() => {
	// 	if(parseInt(user.user_id) === shop.user_id){
	// 		setAdmin(true)
	// 	}
	// }, [user])

	if (!shop) return <div> empty </div>
	return (<div className={styles.container}>
		{admin ?
			(
				<div className={styles.floatingBtnContainer}>
					<Button onClick={handleShowCanvas} variant="outline-dark" className={`${styles.manageBtn}`}>
						Manage
					</Button>
				</div>) : null}
		<Offcanvas show={showCanvas} onHide={handleCloseCanvas} className={styles.offCanvas}>
			<Offcanvas.Header closeButton>
				<Offcanvas.Title>Management Menu</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body>
				<div className={styles.menuContainer}>
					<Button variant="outline-dark" size="sm" className={styles.menuBtn}><FontAwesomeIcon icon="user" /> Manage Team</Button>
					<Button variant="outline-dark" size="sm" className={styles.menuBtn}><FontAwesomeIcon icon="clipboard" /> Manage Services</Button>
					<Button variant="outline-dark" size="sm" className={styles.menuBtn}><FontAwesomeIcon icon="receipt" /> Manage Bookings</Button>
					<Button variant="outline-dark" size="sm" className={styles.menuBtn}><FontAwesomeIcon icon="image" /> Manage Photos</Button>
				</div>
			</Offcanvas.Body>
		</Offcanvas>
		<Container fluid>
			<Row>
				<Col md={{span: 6, offset: 3}}>
					<Carousel>
						<Carousel.Item>
							<div className={styles.imageContainer}>
								<div className={`${styles.imageGrid}`}>
									<img className={`${styles.imageGridCol} ${styles.imageGridRow}`} src={ImageURL1} alt="architecture" />
									<img src={ImageURL} alt="architecture" />
									<img src={ImageURL2} alt="architecture" />
									<img src={ImageURL3} alt="architecture" />
									<img src={ImageURL} alt="architecture" />
								</div>
							</div>
							<Carousel.Caption>
								<div className={styles.titleContainer}>
									<h3 className={styles.title}>Welcome to {shop?.shop_name}</h3>
								</div>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</Col>
			</Row>
			<Row>
				<Col></Col>
				<Col className={styles.column}>
					<div className={styles.services}>
						<h3>Services</h3>
						<ListGroup as="ol" numbered>
							<ListGroup.Item
							as="li"
							action
							className="d-flex justify-content-between align-items-start"
							>
								<div className="ms-2 me-auto">
									<div className="fw-bold">Gel</div>
									beautiful nails
								</div>
								<Badge bg="primary" pill>
									$15
								</Badge>
							</ListGroup.Item>
							<ListGroup.Item
							as="li" 
							action
							className="d-flex justify-content-between align-items-start"
							>
								<div className="ms-2 me-auto">
									<div className="fw-bold">Pedicure</div>
									Feet
									</div>
									<Badge bg="primary" pill>
										$20
									</Badge>
							</ListGroup.Item>
							<ListGroup.Item
							as="li"
 							action
							className="d-flex justify-content-between align-items-start"
							>
								<div className="ms-2 me-auto">
									<div className="fw-bold">Medicure</div>
									Hands
								</div>
								<Badge bg="primary" pill>
									$14
								</Badge>
						</ListGroup.Item>
					</ListGroup>

					</div>
				</Col>
				<Col className={styles.column}>
					<div className={styles.people}>
						<h3>Our Team</h3>
						<Card title="Giang" description='Nail Technician' photo={`${PROFILE_PIC}`}></Card>
						<Card title="Cuong" description='Nail Technician' photo={`${PROFILE_PIC}`}></Card>
						<Card title="Bao" description='Nail Technician' photo={`${PROFILE_PIC}`}></Card>
						<Card title="Khanh" description='Nail Technician' photo={`${PROFILE_PIC}`}></Card>
						<Card title="Linh" description='Nail Technician' photo={`${PROFILE_PIC}`}></Card>
					</div>
				</Col>
				<Col></Col>
			</Row>
		</Container>
	</div>)
}

export default ShopPage

export const getStaticPaths: GetStaticPaths = async () => {
	const prefetch = true;
	const client = initializeApollo(null, prefetch);
	const {data} = await client.query({query: GET_SHOPS, variables: {name: ""}})
	const paths = data.shops.map((e: IShopBody) => ({
		params: {id: e.id.toString()},
	}))
	return {
		paths,
		fallback: true,
	}

}

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => {
	const {params} = ctx;
	const prefetch = true;
	const client = initializeApollo(null, prefetch);
	const {data} = await client.query({query: GET_CURRENT_SHOP, variables: {id: params?.id ? parseInt(params.id as string) : -1}})
	return {
		props: {
			shop: data.shop,
		},
		revalidate: 1,
	}

}
