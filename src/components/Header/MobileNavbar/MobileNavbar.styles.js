import styled from 'styled-components';

import { ReactComponent as Logo } from '../../../assets/images/logo.svg';

export const MobileNavContainer = styled.div`
	position: fixed;
	bottom: 0;
	height: 60px;
	width: 100%;
	border-top: 1px solid #334366;
	display: flex;
	align-items: center;

	@media screen and (min-width: 1000px) {
		display: none;
	}
`;

export const MenuItemsWrap = styled.div`
	width: 100%;
	margin: 0 1em;
	display: flex;
	justify-content: space-between;
`;

export const MenuItem = styled.div`
	display: grid;
	place-content: center;
	cursor: pointer;
`;

export const MenuIconWrap = styled.div`
	font-size: 1.2em;
	color: #6d6d6d;
	text-align: center;
`;

export const Home = styled(Logo)`
	height: 40px;

	@media screen and (max-width: 280px) {
		height: 25px;
	}
`;

export const MenuItemLinks = styled.a`
	text-decoration: none;
	color: #6d6d6d;
	font-size: 0.8em;

	@media screen and (max-width: 368px) {
		font-size: 0.7em;
	}
`;
