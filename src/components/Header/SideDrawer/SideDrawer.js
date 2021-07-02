import React from 'react';

import { FaTimes } from 'react-icons/fa';
import {
	CloseIconConatiner,
	SidebarWrapper,
	MenuButton,
	MenuConatainer,
	RightArr,
	Links,
	MenuLinksWrapper,
	WatchlistLinkWrap,
	MenuLink,
	SubButtonWrap,
	SubscribeBtn,
} from './SideDrawer.styles';

const SideDrawer = ({ toggle, isOpen }) => {
	return (
		<SidebarWrapper isOpen={isOpen}>
			<CloseIconConatiner onClick={toggle} isOpen={isOpen}>
				<FaTimes />
			</CloseIconConatiner>

			<MenuConatainer>
				<MenuButton>
					<Links onClick={toggle} href='#'>
						LOGIN <br /> For a Better Experience
					</Links>
					<RightArr />
				</MenuButton>
				<WatchlistLinkWrap>
					<Links onClick={toggle} href='/'>
						Watchlist
					</Links>
				</WatchlistLinkWrap>

				<MenuLinksWrapper>
					<MenuLink onClick={toggle} href='/'>
						Premium
					</MenuLink>
					<MenuLink onClick={toggle} href='/'>
						Channels
					</MenuLink>
					<MenuLink onClick={toggle} href='/'>
						Languages
					</MenuLink>
					<MenuLink onClick={toggle} href='/'>
						Geners
					</MenuLink>
				</MenuLinksWrapper>
				<SubButtonWrap>
					<SubscribeBtn href='/'>SUBSCRIBE</SubscribeBtn>
				</SubButtonWrap>
			</MenuConatainer>
		</SidebarWrapper>
	);
};

export default SideDrawer;
