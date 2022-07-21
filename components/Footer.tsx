import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Footer.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Footer = () => (
	<div className={styles.container}>
		<footer className={styles.footer}>
			<div className="container">
				<div className="row">
					<div className="col-8 col-md-3">
						<div className="column">
							<h4 className="mt-3">Discover</h4>
							<ul>
								<li><a href="/"><span>Hair Salon</span></a></li>
								<li><a href="/"><span>Nail Salon</span></a></li>
								<li><a href="/"><span>Spa</span></a></li>
							</ul>
						</div>
					</div>
					<div className="col-8 col-md-3">
						<div className="column">
							<h4 className="mt-3">Resources</h4>
							<ul>
								<li className="nav-item">
									<a href="https://creative-tim.com/contact-us">Contact Us</a>
								</li>
								<li className="nav-item">
									<a href="https://www.creative-tim.com/presentation">About Us</a>
								</li>
								<li className="nav-item">
									<a href="https://creative-tim.com/blog">Blog</a>
								</li>
								<li className="nav-item">
									<a href="https://opensource.org/licenses/MIT">License</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-8 col-md-3">
						<div className="column">
							<h4 className="mt-3">Social</h4>
							<div className="btn-wrapper profile text-left">
								<ul>
									<a href="https://twitter.com" id="tooltip799285778" className="btn btn-twitter btn-sm"><i aria-hidden className="fab fa-instagram-square"></i></a>
									<a href="https://www.facebook.com" id="tooltip33856223" className="btn btn-facebook btn-sm"><i aria-hidden className="fab fa-facebook"></i></a>
									<a href="https://dribbble.com" id="tooltip521847749" className="btn btn-slack btn-sm"><i aria-hidden className="fa fa-envelope"></i></a>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-8 col-md-3">
						<div className="column">
							<div className="mt-3">
								<label className={styles.item}>
									<h5>Languages</h5>
									<select>
										<option>English</option>
									</select>
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	</div>
);

export default Footer;
