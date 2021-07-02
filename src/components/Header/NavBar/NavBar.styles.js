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

	@media screen and (max-width: 380px) {
		height: 60px;
		padding: 0 10px;
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

	@media screen and (min-width: 1001px) {
		display: none;
	}

	@media screen and (max-width: 380px) {
		font-size: 1em;
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

	@media screen and (max-width: 380px) {
		width: 50px;
	}
`;

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;

	@media screen and (max-width: 1000px) {
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
	margin-right: 1.5em;

	@media screen and (max-width: 1000px) {
		margin: 0;
	}
`;

export const SearchBar = styled.input`
	width: ${({ searchStatus }) => (searchStatus ? '80%' : '0%')};
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

	@media screen and (max-width: 380px) {
		padding: 5px 15px;
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

	@media screen and (max-width: 380px) {
		width: 30px;
		height: 30px;
		margin-left: -30px;
	}
`;

export const SearchIcon = styled(FaSearch)`
	color: #fff;
	font-size: 1.2em;
	font-weight: bold;

	@media screen and (max-width: 280px) {
		font-size: 1em;
	}
`;

export const LoginContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LoginBtn = styled.button`
	background: #1f80e0;
	/* background: none; */
	color: #fff;
	font-size: 1em;
	font-weight: bold;
	border: none;
	cursor: pointer;
	letter-spacing: 1.4px;
	padding: 0.5em 1.5em;
	border-radius: 3px;
	transition: all 0.3 ease-in;
	display: none;

	&:hover {
		color: #1f80e0;
		transition: all 0.2s ease-in;
	}

	@media screen and (max-width: 1000px) {
		display: none;
	}
`;

// export const SubsBtn = styled.button`
// 	background: #1f80e0;
// 	color: #fff;
// 	padding: 0.5em 1.5em;
// 	border-radius: 3px;
// 	font-weight: bold;
// 	border: none;
// 	cursor: pointer;
// 	margin-right: 1em;
// 	letter-spacing: 1.4px;

// 	@media screen and (max-width: 1000px) {
// 		display: none;
// 	}
// `;

export const UserImage = styled.div`
	background-image: url('https://lh3.googleusercontent.com/qxgKxO3cpb3tyCEsJ9NTuNwm9Me-nQoWz1TC9cQE7jf8-aXEsHt6GVGNYsPsTs7uwAgWmZOT3O6I-7LHYmoQ_RJ9Olqsf9g8Jip8tBlfYPtx_nDjnXmIvc9yYSA_d8hnCvPhxeymgMnhqHVD4DfQr9w9EWTy88bbmopw57aKavLJuhY1uUzoIVSYldi0_xQAIzO1wOylNZwqkNMdN1tp3MimapNYCqK9tQr_NkGL9zdBEzVRiqXpL4vccJZYO2qqTN2OYjZPKuB92LGLkwHLT6H6yMwABZXFLlIFmHiE_iT579wa9PF2bD1yv3gqZlg_VXseUoZtz7vA-1ACHAC-NXX1K5FaWhHIm2H3_K71zsuegKtluLGI41g8jig2Uhe5Ik0qFbId1rFuVehB5RS08Df-9ydeUIPewcMws7iQ9wUEOP_AXmOe6nNuIzGHP59W5an85dRZ4jqh170abYV5P_wmhu2FZ1Yjcih2p15_QFmNC_aEF1ENlsJhe-v2X_FvkfUuBebIJ2qQjYolTjrWEuDXNy80A6d6U9wW-9q5e0RrYHZ6kIqtinqtlDkoe3AL529zpuD8cJPgXYxdb73ng1vFcBj5Ei6x946WNJF24OddPByUwe4guCLil37q0ynFPKD-cweE1BnsvQc0bqj6fetaFC-hYBit3mfwVG9FuNc9mjVKYl1wtmQkewFkZcThEOXiFiNZ9ylga3W9Jpwr2LU=w605-h598-no?authuser=0');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	width: 50px;
	height: 50px;
	border: 1px solid #334366;
	border-radius: 50%;
	cursor: pointer;
`;
