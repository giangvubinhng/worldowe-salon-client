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
			>
				<Container>
					<BNavbar.Brand><Link href="/">Worldowe</Link></BNavbar.Brand>
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
										title={
											<span className={styles.navDropdown}>{user.first_name}</span>
										}
										menuVariant="light"
									>
										<Link href={`/users/${user.user_id}/shops`} passHref>
											<NavDropdown.Item>My Stores</NavDropdown.Item>
										</Link>
										<NavDropdown.Divider />
										<NavDropdown.Item href="/account">
											Account
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