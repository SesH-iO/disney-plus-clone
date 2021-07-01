import styled from 'styled-components';

// import { NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
// import { ReactComponent as SearchIcon } from '../../../assets/images/search-icon.svg';
import { ReactComponent as NavLogo } from '../../../assets/images/logo.svg';

export const Nav = styled.nav`
	height: 80px;
	background: #131a28;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 36px;
	position: sticky;
	top: 0;
	z-index: 20;

	@media screen and (max-width: 768px) {
		padding: 0 20px;
	}
`;

export const NavBarContainer = styled.div`
	display: flex;
	align-items: center;
	height: 80px;
	z-index: 1;
	width: 100%;
	max-width: 100%;
	/* max-width: 1100px; */
`;

export const SidebarIcon = styled.div`
	display: grid;
	place-content: center;
	font-size: 1.4em;
	margin-right: 1em;
	color: #fff;
	cursor: pointer;

	@media screen and (min-width: 1024px) {
		display: none;
	}
`;

export const LogoContainer = styled.div`
	display: grid;
	place-content: center;
	margin-right: 3em;
`;

export const Logo = styled(NavLogo)`
	width: 90px;

	@media screen and (max-width: 768px) {
		width: 65px;
	}
`;

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;

	@media screen and (max-width: 1024px) {
		display: none;
	}
`;
export const NavItems = styled.li`
	height: 80px;
`;
// export const NavLinks = styled(NavLink)``;
export const NavLinks = styled.a`
	color: #b9b9b9;
	letter-spacing: 1.42px;
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

export const SearchBarContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	margin-right: 2em;

	@media screen and (max-width: 1024px) {
		margin: 0;
	}
`;

export const SearchBar = styled.input`
	width: ${({ searchStatus }) => (searchStatus ? '60%' : '0%')};
	padding: 10px 20px;
	background: #ececec;
	border: none;
	border-radius: 30px;

	transition: all 0.2s ease-out;

	&:focus {
		outline: none;
	}

	&::placeholder {
		font-size: 14px;
		/* color: #ececec; */
	}

	@media screen and (max-width: 768px) {
		width: ${({ searchStatus }) => (searchStatus ? '100%' : '0%')};
	}
`;

export const SearchIconWrapper = styled.div`
	display: grid;
	width: 40px;
	height: 40px;
	place-content: center;
	margin-left: -40px;
	background: #135ca5;
	border-radius: 30px;

	cursor: pointer;
`;

export const SearchIcon = styled(FaSearch)`
	color: #fff;
	font-size: 1.2em;
	font-weight: bold;
`;

export const LoginContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LoginBtn = styled.button`
	background: #1f80e0;
	color: #fff;
	font-size: 1em;
	font-weight: bold;
	border: none;
	cursor: pointer;
	letter-spacing: 1.4px;
	padding: 0.5em 1.5em;
	border-radius: 3px;
	transition: all 0.3 ease-in;

	/* &:hover {
		color: #1f80e0;
		transition: all 0.2s ease-in;
	} */

	@media screen and (max-width: 1024px) {
		display: none;
	}
`;

// export const LoginBtn = styled.button`
// 	background: #1f80e0;
// 	color: #fff;
// 	padding: 0.8em 2em;
// 	border-radius: 3px;
// 	font-weight: bold;
// 	border: none;
// 	cursor: pointer;
// 	letter-spacing: 1.4px;

// 	@media screen and (max-width: 1024px) {
// 		display: none;
// 	}
// `;
