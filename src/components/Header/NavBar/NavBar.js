import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

import {
	Nav,
	LogoContainer,
	Logo,
	NavMenu,
	NavBarContainer,
	NavLinks,
	SearchBarContainer,
	SearchBar,
	SearchIconWrapper,
	SearchIcon,
	LoginContainer,
	LoginBtn,
	SidebarIcon,
	UserImage,
	// SubsBtn,
} from './NavBar.styles';

const NavBar = ({ toggle }) => {
	const [searchStatus, setSearchStatus] = useState(false);

	const searchToggleHandler = () => {
		setSearchStatus(!searchStatus);
	};

	return (
		<Nav>
			<NavBarContainer>
				<SidebarIcon onClick={toggle}>
					<FaBars />
				</SidebarIcon>
				<LogoContainer>
					<Logo />
				</LogoContainer>
				<NavMenu>
					<NavLinks>Home</NavLinks>
					<NavLinks>Movies</NavLinks>
					<NavLinks>Originals</NavLinks>
					<NavLinks>Series</NavLinks>
					<NavLinks>Premium</NavLinks>
				</NavMenu>
				<SearchBarContainer>
					<SearchBar
						type='search'
						placeholder='Search'
						aria-label='search'
						searchStatus={searchStatus}
					/>
					<SearchIconWrapper onClick={searchToggleHandler}>
						<SearchIcon />
					</SearchIconWrapper>
				</SearchBarContainer>
				<LoginContainer>
					{/* <SubsBtn>SUBSCRIBE</SubsBtn> */}
					<LoginBtn>LOGIN</LoginBtn>
					<UserImage  />
				</LoginContainer>
			</NavBarContainer>
		</Nav>
	);
};

export default NavBar;
