import React, { Fragment } from 'react';

import GlobalStyle from './global.styles';

import Home from './pages/Home/Home';

function App() {
	return (
		<Fragment>
			<GlobalStyle />
			<Home />
		</Fragment>
	);
}

export default App;
