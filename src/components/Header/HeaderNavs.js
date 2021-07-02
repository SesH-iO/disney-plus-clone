import React from 'react'
import { Backdrop } from "../UI/Backdrop.styles";
import MobileNavbar from './MobileNavbar/MobileNavbar';
import NavBar from './NavBar/NavBar';
import SideDrawer from './SideDrawer/SideDrawer';

const HeaderNavs = ({toggle, isOpen}) => {
  return (
		<>
			<Backdrop onClick={toggle} isOpen={isOpen} />
			<SideDrawer toggle={toggle} isOpen={isOpen} />
			<NavBar toggle={toggle} />
			<MobileNavbar />
		</>
	);
}

export default HeaderNavs
