import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { ReactComponent as NavLogo } from '../../../assets/images/logo.svg';

export const Nav = styled.nav`
	height: 80px;
	background-color: #090b13;
	display: flex;
	align-items: center;
	padding: 0 36px;
	position: sticky;
	top: 0;
	z-index: 20;
`;

export const NavBarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	z-index: 1;
	width: 100%;
	max-width: 1100px;
	padding: 0 24px;
`;

export const Logo = styled(NavLogo)`
	width: 80px;
`;

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;
export const NavItems = styled.li`
	height: 80px;
`;
// export const NavLinks = styled(NavLink)``;
export const NavLinks = styled.a`
	color: #ccc;
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	padding: 0 1.5rem;
	cursor: pointer;
	transition: all 0.2s ease-in;

	&:hover {
		color: #fff;
		transition: all 0.2s ease-in;
	}

	&.active {
		border-bottom: 3px solid #fff;
	}
`;
