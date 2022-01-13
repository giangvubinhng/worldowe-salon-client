import Link from 'next/link';
import React from 'react';
import {
	Button,
	Container,
	Nav,
	Navbar as BNavbar,
	NavDropdown,
} from 'react-bootstrap';
import styles from '../styles/Navbar.module.css';
import { IUserBody } from '../interfaces/IUser';
import { logout } from '../services/user.service';

interface props {
	user: IUserBody;
}

const Navbar: React.FC<props> = ({ user }) => {
	return (
		<div className={styles.navbarContainer}>
			<BNavbar
				collapseOnSelect
				expand="lg"
				className={styles.navbar}
				fixed="top"
			>
				<Container>
					<BNavbar.Brand href="/">Worldowe</BNavbar.Brand>
					<BNavbar.Toggle aria-controls="responsive-navbar-nav" />
					<BNavbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto"></Nav>
						<Nav>
							<Link href="/" passHref>
								<Nav.Link>
									<h4 className={styles.navLink}>Home</h4>
								</Nav.Link>
							</Link>
							{user.is_loggedIn ? (
								<>
									<NavDropdown
										id="nav-dropdown-dark-example"
										title={'Hi, ' + user.first_name}
										menuVariant="dark"
									>
										<NavDropdown.Item href="#action/3.1">
											My Stores
										</NavDropdown.Item>
										<NavDropdown.Divider />
										<NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
									</NavDropdown>
								</>
							) : (
								<>
									<Link href="/login" passHref>
										<Nav.Link>
											<h4 className={styles.navLink}>Sign In</h4>
										</Nav.Link>
									</Link>
									<Link href="/signup" passHref>
										<Nav.Link>
											<h4 className={styles.navLink}>Sign Up</h4>
										</Nav.Link>
									</Link>
								</>
							)}
						</Nav>
					</BNavbar.Collapse>
				</Container>
			</BNavbar>
		</div>
	);
};

export default Navbar;
