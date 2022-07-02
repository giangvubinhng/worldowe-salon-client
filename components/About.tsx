
import React from "react";
import { NextPage } from "next";
import styles from '@/styles/About.module.css'
import { Col, Container, Row } from "react-bootstrap";

const About: NextPage = () => {

	return (
		<div className={styles.section}>
			<div className={styles.container}>
				<div className={styles.title}>
					<div className={styles.imgSection}>
						<img src="https://source.unsplash.com/user/c_v_r" alt="Sample about photo" className="AboutUsIMG" />
					</div>
					<h1 className={styles.h1}>About Us</h1>
					<div className={styles.content}>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, omnis fuga. Rem dignissimos eius, commodi voluptate voluptatem quia veniam dolorem libero tenetur quaerat dicta accusamus nobis perferendis reiciendis asperiores ea ducimus esse ut optio dolorum aut eaque. Saepe, officiis! Doloribus voluptates recusandae pariatur est non dolores neque doloremque voluptate mollitia expedita! Rem, architecto nemo labore, eligendi officiis commodi recusandae harum nam veritatis, itaque temporibus a dignissimos. Eos maiores iusto vitae amet officiis dicta? Minima ex doloribus iure. Sed ullam, fugit ducimus itaque id sunt esse voluptatem nam omnis dolore reiciendis quibusdam nostrum dicta sapiente odit iure consectetur laboriosam quo blanditiis ad numquam dolores inventore eum? Quae sapiente blanditiis, eligendi adipisci nam quasi nobis architecto cumque voluptatum harum debitis vitae, aliquam incidunt ut. Deserunt pariatur fuga facere quidem cumque? Alias doloribus sapiente soluta consequuntur aspernatur iusto ex debitis reprehenderit ipsa, ad tenetur incidunt ab laborum pariatur quos minima provident. Non expedita cupiditate culpa mollitia sunt nemo repellat perspiciatis officiis accusamus! Quo eius et iusto rerum aperiam saepe quidem, numquam blanditiis, voluptate enim officiis hic voluptas. Facere corporis eos expedita! Similique eaque qui maiores libero. Aliquam quam quod possimus quas, magnam ratione quos modi! Incidunt officia minus fuga totam odit quos quasi!
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;