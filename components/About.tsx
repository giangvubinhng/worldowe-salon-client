
import React from "react";
import { NextPage } from "next";
import styles from '@/styles/About.module.css'
import { Carousel, Container, Row, Col } from "react-bootstrap";

const About: NextPage = () => {

	return (
		<div className={styles.section}>
			<Carousel indicators={false}>
				<Carousel.Item>
					<Container>
						<Row>
							<Col md="8">
								{/* <Carousel.Caption>
								<h3>First slide label</h3>
								<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
								</Carousel.Caption> */}
								<div className={styles.infoContainer}>
									<h2 className={styles.title}>Book a service at your favorite salon now so you won't have to wait.</h2>
								</div>
							</Col>
							<Col>
								<img
								className={styles.img}
								src="https://assets.vogue.in/photos/61c04effe519ba5c28e92cc6/master/pass/9%20nail%20trends%20to%20try%20this%20winter.jpg"
								alt="First slide"
								/>
							</Col>
						</Row>
					</Container>
				</Carousel.Item>
				<Carousel.Item>
					<Container>
						<Row>
							<Col md="8">
								{/* <Carousel.Caption>
								<h3>First slide label</h3>
								<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
								</Carousel.Caption> */}
								<div className={styles.infoContainer}>
									<h2 className={styles.title}>Own a shop? Sign up right now and manage your shop for FREE!</h2>
								</div>
							</Col>
							<Col>
								<img
								className={styles.img}
								src="https://media.self.com/photos/5e90a14c5702bf00082e4d26/1:1/w_1987,h_1987,c_limit/woman_nails_manicure.jpg"
								alt="Second slide"
								/>
							</Col>
						</Row>
					</Container>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default About;