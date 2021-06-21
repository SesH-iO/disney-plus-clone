import React from 'react';

import { Nav, Logo, NavMenu, NavBarContainer, NavLinks } from './NavBar.styles';

const NavBar = () => {
	return (
		<Nav>
			<NavBarContainer>
				<Logo />
				<NavMenu>
					<NavLinks>Home</NavLinks>
					<NavLinks>Movies</NavLinks>
					<NavLinks>Sports</NavLinks>
					<NavLinks>Originals</NavLinks>
					<NavLinks>Series</NavLinks>
					<NavLinks>Premium</NavLinks>
				</NavMenu>
			</NavBarContainer>
		</Nav>
	);
};

export default NavBar;
