import React, { Fragment, useState } from 'react';
import NavBar from '../../components/Header/NavBar/NavBar';
import SideDrawer from '../../components/Header/SideDrawer/SideDrawer';
import { Backdrop } from '../../components/UI/Backdrop.styles';

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Fragment>
			<Backdrop onClick={toggleMenu} isOpen={isOpen} />
			<SideDrawer toggle={toggleMenu} isOpen={isOpen} />
			<NavBar toggle={toggleMenu} />
		</Fragment>
	);
};

export default Home;
