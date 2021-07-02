import styled from 'styled-components';

import { MdKeyboardArrowRight } from 'react-icons/md';

export const SidebarWrapper = styled.div`
	width: 65%;
	background: #101522;
	position: fixed;
	top: 0;
	left: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};
	bottom: 0;
	z-index: 999;
	transition: 0.3s left ease-in-out;

	@media screen and (min-width: 1030px) {
		display: none;
	}
`;

export const CloseIconConatiner = styled.div`
	text-align: right;
	font-size: 1.5em;
	color: #fff;
	margin: 1em;
	cursor: pointer;

	@media screen and (max-width: 380px) {
		font-size: 1em;
		margin: 0.8em;
	}
`;

export const MenuConatainer = styled.div`
	color: #fff;
`;

export const MenuButton = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.5em 2em;
	cursor: pointer;

	@media screen and (max-width: 420px) {
		padding: 1em;
		margin: 3em 0 0 0;
		font-size: 0.7em;
	}
`;

export const WatchlistLinkWrap = styled.div`
	padding: 1em 2em;
	cursor: pointer;
	border-bottom: 1px solid #334366;
	border-top: 1px solid #334366;

	@media screen and (max-width: 420px) {
		padding: 0.8em;
		font-size: 0.8em;
	}
`;

export const Links = styled.a`
	text-decoration: none;
	color: #fff;

	@media screen and (max-width: 280px) {
		font-size: 1em;
	}
`;

export const RightArr = styled(MdKeyboardArrowRight)`
	font-size: 1.5em;
`;

export const MenuLinksWrapper = styled.div`
	padding: 2em;

	@media screen and (max-width: 420px) {
		padding: 1em;
	}
`;

export const MenuLink = styled.a`
	display: flex;
	align-items: center;
	padding: 1.5em 0;
	text-decoration: none;
	color: #fff;

	@media screen and (max-width: 420px) {
		padding: 1em 0;
		font-size: 0.7em;
	}
`;

export const SubButtonWrap = styled.div`
	text-align: center;
	margin-top: 5em;
	padding: 1em;
	background: #1f90e0;

	@media screen and (max-width: 420px) {
		font-size: 0.7em;
		margin-top: 8em;
	}
`;

export const SubscribeBtn = styled.a`
	text-decoration: none;
	font-size: 1.2em;
	font-weight: bold;
	color: #fff;

	@media screen and (max-width: 280px) {
		font-size: 1em;
	}
`;
