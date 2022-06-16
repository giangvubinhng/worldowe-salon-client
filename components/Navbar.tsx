import Link from 'next/link';
import React from 'react';
import {
	Container,
	Nav,
	Navbar as BNavbar,
	NavDropdown,
} from 'react-bootstrap';
import styles from '../styles/Navbar.module.css';
import { IUserBody } from '../interfaces/IUser';
import { logout } from '../services/user.service';
import LoadingOverlay from './LoadingOverlay';

interface props {
	user: IUserBody;
	isLoaded?: boolean;
}

const Navbar: React.FC<props> = ({ user, isLoaded }) => {
	return (
		<div className={styles.navbarContainer}>
			<BNavbar
				collapseOnSelect
				expand="lg"
				className={styles.navbar}
			>
				<Container>
					<Link href="/" passHref><BNavbar.Brand>Worldowe</BNavbar.Brand></Link>
					<BNavbar.Toggle aria-controls="responsive-navbar-nav" />
					<BNavbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto"></Nav>
						<Nav>
							<Link href="/" passHref>
								<Nav.Link>
									<h4 className={styles.navLink}>Home</h4>
								</Nav.Link>
							</Link>
							{!isLoaded ? <LoadingOverlay/> : null}	
							{!user.is_loggedIn && isLoaded ? (
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
							) : null}
							{user.is_loggedIn && isLoaded ? (
								<>
									<NavDropdown
										className={styles.navDropDown}
										title={user.first_name}
										id="responsive-navbar-dropdown"
										menuVariant="light"
									>
										<Link href={`/users/${user.user_id}/shops`} passHref>
											<NavDropdown.Item>
												My Stores
											</NavDropdown.Item>
										</Link>

										
										<Link href={`/account`} passHref>
											<NavDropdown.Item>
												Account
											</NavDropdown.Item>
										</Link>

										<NavDropdown.Divider />
										
										<NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
									</NavDropdown>
								</>
							) : null}
						</Nav>
					</BNavbar.Collapse>
				</Container>
			</BNavbar>
		</div>
	);
};

export default Navbar;