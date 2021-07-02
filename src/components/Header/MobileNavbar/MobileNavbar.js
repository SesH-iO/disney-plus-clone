import React from 'react';

import {
	MenuItem,
	MenuItemsWrap,
	MobileNavContainer,
	MenuIconWrap,
	MenuItemLinks,
  // Home,
} from './MobileNavbar.styles';
import { BiStar, BiHome, BiTv, BiMovie } from 'react-icons/bi';
const MobileNavbar = () => {
	return (
		<MobileNavContainer>
			<MenuItemsWrap>
				<MenuItem>
					<MenuIconWrap>
						<BiHome />
					</MenuIconWrap>
					<MenuItemLinks href='/'>Home</MenuItemLinks>
				</MenuItem>
				<MenuItem>
					<MenuIconWrap>
						<BiTv />
					</MenuIconWrap>
					<MenuItemLinks href='/'>Series</MenuItemLinks>
				</MenuItem>
				{/* <MenuItem>
					<MenuIconWrap>
						<Home />
					</MenuIconWrap>
				</MenuItem> */}
				<MenuItem>
					<MenuIconWrap>
						<BiMovie />
					</MenuIconWrap>
					<MenuItemLinks href='/'>Movies</MenuItemLinks>
				</MenuItem>
				<MenuItem>
					<MenuIconWrap>
						<BiStar />
					</MenuIconWrap>
					<MenuItemLinks href='/'>Originals</MenuItemLinks>
				</MenuItem>
			</MenuItemsWrap>
		</MobileNavContainer>
	);
};

export default MobileNavbar;
