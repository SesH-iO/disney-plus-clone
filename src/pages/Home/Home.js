import React, { Fragment, useState } from 'react';
import HeaderNavs from '../../components/Header/HeaderNavs';

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Fragment>
			<HeaderNavs toggle={toggleMenu} isOpen={isOpen} />
		
		</Fragment>
	);
};

export default Home;
