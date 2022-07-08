import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import {initializeApollo} from '@/Apollo/client'
import styles from '@/styles/ShopDetail.module.css';
import {GET_CURRENT_SHOP, GET_SHOPS} from "@/graphql/shopQueries";
import {IShopBody} from '@/interfaces/IShop';
import {useAppSelector} from '@/app/hooks'
import { Offcanvas, Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import { useState } from 'react';

interface props {
	shop: IShopBody
}
//doc : https://github.com/vercel/next.js/blob/canary/examples/with-apollo/lib/apolloClient.js

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
		<Carousel>
			<Carousel.Item>
				<div className={styles.imageContainer}>
					<div className={`${styles.imageGrid}`}>
						<img className={`${styles.imageGridCol} ${styles.imageGridRow}`} src="https://img.freepik.com/premium-vector/beauty-salon-color-illustration-hair-stylist-workplace-room-make-up-artist-barbershop-table-cosmetology-parlor-cartoon-interior-with-mirrors-armchairs-background_151150-1303.jpg?w=2000" alt="architecture"/>
						<img src="https://img.freepik.com/premium-vector/beauty-salon-color-illustration-hair-stylist-workplace-room-make-up-artist-barbershop-table-cosmetology-parlor-cartoon-interior-with-mirrors-armchairs-background_151150-1303.jpg?w=2000" alt="architecture"/>
						<img src="https://img.freepik.com/premium-vector/beauty-salon-color-illustration-hair-stylist-workplace-room-make-up-artist-barbershop-table-cosmetology-parlor-cartoon-interior-with-mirrors-armchairs-background_151150-1303.jpg?w=2000" alt="architecture"/>
						<img src="https://img.freepik.com/premium-vector/beauty-salon-color-illustration-hair-stylist-workplace-room-make-up-artist-barbershop-table-cosmetology-parlor-cartoon-interior-with-mirrors-armchairs-background_151150-1303.jpg?w=2000" alt="architecture"/>
						<img src="https://img.freepik.com/premium-vector/beauty-salon-color-illustration-hair-stylist-workplace-room-make-up-artist-barbershop-table-cosmetology-parlor-cartoon-interior-with-mirrors-armchairs-background_151150-1303.jpg?w=2000" alt="architecture"/>
					</div>
				</div>
					<Carousel.Caption>
						<div className={styles.titleContainer}>
							<h3 className={styles.title}>Welcome to {shop?.shop_name}</h3>
						</div>
					</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
		{admin ? 
		( 
			<div className={styles.floatingBtnContainer}>
				<Button onClick={handleShowCanvas} variant="outline-dark" className={`${styles.manageBtn}`}>
					Manage
				</Button>
			</div>) : null}
		<Offcanvas show={showCanvas} onHide={handleCloseCanvas}>
			<Offcanvas.Header closeButton>
			<Offcanvas.Title>Offcanvas</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body>
			<div>
				<Button>Add services</Button>
				<Button>Add Technicians</Button>
			</div>
			</Offcanvas.Body>
		</Offcanvas>
		<Container fluid>
			<Row>
				<Col className={styles.column}>
					<div className={styles.services}>
						<h3>Services</h3>

					</div>
				</Col>
				<Col className={styles.column}>
					<div className={styles.people}> 
						<h3>Our Team</h3>
					</div>
				</Col>
			</Row>
		</Container>
	</div>)
}

export default ShopPage

export const getStaticPaths: GetStaticPaths = async () => {
	const prefetch  = true;
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
	const prefetch  = true;
	const client = initializeApollo(null, prefetch);
	const {data} = await client.query({query: GET_CURRENT_SHOP, variables: {id:  params?.id ? parseInt(params.id as string) : -1}})
	return {
		props: {
			shop: data.shop,
		},
		revalidate: 1,
	}

}
