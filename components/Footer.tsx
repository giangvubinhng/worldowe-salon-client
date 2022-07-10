import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => (
	<div>
		<footer className={styles.footer}>
			<div className="container">
				<div className="row">
					<div className="col-6 col-md-2">
						<div className="column">
							<h4 className="mt-3">Discover</h4>
							<ul>
								<li><a href="javascript:;"><span>Hair Salon</span></a></li>
								<li><a href="javascript:;"><span>Nail Salon</span></a></li>
								<li><a href="javascript:;"><span>Spa</span></a></li>
							</ul>
						</div>
					</div>
					<div className="col-6 col-md-2">
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
					<div className="col-6 col-md-2">
						<div className="column">
							<h4 className="mt-3">Bussiness</h4>
							<ul>
								<li className="nav-item">
									<a href="javascript:;">Support</a>
								</li>
								<li className="nav-item">
									<a href="javascript:;">Jobs</a>
								</li>
								<li className="nav-item">
									<a href="javascript:;">Privacy</a>
								</li>
								<li className="nav-item">
									<a href="javascript:;">Guides</a>
								</li>
								<li className="nav-item">
									<a href="javascript:;">Pricing</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-md-4">
						<div className="column">
							<h4 className="mt-3">Follow us</h4>
							<div className="btn-wrapper profile text-left">
								<a href="https://twitter.com/creativetim" id="tooltip799285778" className="btn btn-twitter btn-sm"></a>
								<a href="https://www.facebook.com/creativetim" id="tooltip33856223" target="_blank" className="btn btn-facebook btn-sm"></a>
								<a href="https://dribbble.com/creativetim" id="tooltip521847749" target="_blank" className="btn btn-slack btn-sm"><i className="fab fa-slack"></i></a>
							</div>
						</div>
						<div className="dropdown">
							<label>
								<h5>Languages</h5>
								<select>
									<option>English</option>
									<option>Spanish</option>
									<option>Vietnamese</option>
								</select>
							</label>
						</div>
						<div className="dropdown">
							<label>
								<h5>Country</h5>
								<select>
									<option>United States</option>
									<option>Canada</option>
									<option>Mexico</option>
									<option>Vietnam</option>
								</select>
							</label>
						</div>
						<a
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
				</div>
			</div>
		</footer>
	</div>
);

export default Footer;