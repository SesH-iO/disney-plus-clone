import React, { Fragment } from 'react';

import GlobalStyle from './global.styles';

import NavBar from './components/Header/NavBar/NavBar';
import Home from './pages/Home/Home';

function App() {
	return (
		<Fragment>
			<GlobalStyle />
			<NavBar />
			<Home />
		</Fragment>
	);
}

export default App;
