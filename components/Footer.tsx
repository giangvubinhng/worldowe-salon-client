import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Footer.module.css';

const Footer = () => (
	<div className={styles.container}>
		<footer className={styles.footer}>
			<div className="container">
				<div className="row">
					<div className="col-8 col-md-3">
						<div className="column">
							<h4 className="mt-3">Discover</h4>
							<ul>
								<li><a href="javascript:;"><span>Hair Salon</span></a></li>
								<li><a href="javascript:;"><span>Nail Salon</span></a></li>
								<li><a href="javascript:;"><span>Spa</span></a></li>
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
							<h4 className="mt-3">Bussiness</h4>
							<ul>
								<li><a href="#">Web design</a></li>
								<li><a href="#">Development</a></li>
								<li><a href="#">Hosting</a></li>
							</ul>
						</div>
					</div>
					<div className="col-8 col-md-3">
						<div className="column">
							<div className="mt-3">
								<label className={styles.item}>
									<h5>Languages</h5>
									<select>
										<option>English</option>
										<option>Spanish</option>
										<option>Vietnamese</option>
									</select>
								</label>
							</div>
							<div className="mt-3">
								<label className={styles.item}>
									<h5>Country</h5>
									<select>
										<option>United States</option>
										<option>Canada</option>
										<option>Mexico</option>
										<option>Vietnam</option>
									</select>
								</label>
							</div>
							<div className="btn-wrapper profile text-left">
								<ul>
									<a href="https://twitter.com" id="tooltip799285778" className="btn btn-twitter btn-sm"></a>
									<a href="https://www.facebook.com" id="tooltip33856223" className="btn btn-facebook btn-sm"></a>
									<a href="https://dribbble.com" id="tooltip521847749" className="btn btn-slack btn-sm"><i className="fa fa-slack"></i></a>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<a className={styles.copyright}
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Worldowe{' '}
					<span className={styles.logo}>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</div>
		</footer>
	</div>
);

export default Footer;