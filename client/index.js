import React, { StrictMode } from 'react';
// import ReactDOM, { render } from 'react-dom';
import App from './App.jsx';
import { ThemeProvider, createTheme } from '@mui/material';
import { orange } from '@mui/material/colors';
import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux'; // importing react-redux
// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import reducers from './redux/reducers';

// initating theme color for our app
const theme = createTheme({
	palette: {
		// primary color
		primary: {
			//light-sky-blue
			main: '#87CEFA',
		},
		secondary: {
			main: orange[500],
		},
	},
});

// initaiting redux store
// const store = createStore(reducers, compose(applyMiddleware(thunk)));

// getting root element by id = app
const rootEle = document.getElementById('app');
const root = createRoot(rootEle);
root.render(
	<ThemeProvider theme={theme}>
		{/* <Provider store={store}> */}
			<App />,
		{/* </Provider> */}
	</ThemeProvider>,
);
