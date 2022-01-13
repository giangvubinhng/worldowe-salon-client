import React, { FC, ReactElement } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavLink: FC<{ href: string }> = ({ children, href }) => {
	const child = React.Children.only(children);
	const router = useRouter();

	return (
		<Link href={href}>
			{React.cloneElement(child as ReactElement<any, string>, {
				'aria-current': router.pathname === href ? 'page' : null,
			})}
		</Link>
	);
};
export default NavLink;
