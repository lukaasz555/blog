import React, { useEffect, useState, useContext, Provider } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from 'assets/theme';
import GlobalStyle from 'assets/styles/GlobalStyles';
import Header from 'components/molecules/Header/Header';
import MobileNav from 'components/molecules/MobileNav/MobileNav';
import { Wrapper, StyledMain } from 'views/Root/Root.styles';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Blog from '../Blog/Blog';
import Category from '../Category/Category';
import DesktopNav from 'components/molecules/DesktopNav/DesktopNav';
import Loader from 'components/atoms/Loader/Loader';
//import FullArticle from "../FullArticle/FullArticle";
import axios from 'axios';
const LazyAbout = React.lazy(() => import('../About/About'));
const LazyFullArt = React.lazy(() => import('../FullArticle/FullArticle'));
const LazyContact = React.lazy(() => import('../Contact/Contact'));

export const NavContext = React.createContext({
	isOpen: false,
	setOpen: () => {},
	toggleMobileNav: () => {},
});

const Root = () => {
	// handle mobile-nav:
	const [isOpen, setOpen] = useState(false);
	const toggleMobileNav = () => {
		setOpen(!isOpen);
	};

	// fetching data from CMS:
	const URL = 'https://graphql.datocms.com/';
	const query = `
{
  allArticles {
    id
    img {
      id
      url
    }
    title
    short
    content
    category
    date
    source
  }
}
`;

	const [articles, setArticles] = useState([]);
	const [error, setError] = useState('');
	const [filteredArts, setFilteredArts] = useState([]);

	useEffect(() => {
		axios
			.post(
				URL,
				{ query },
				{
					headers: {
						authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
					},
				}
			)
			.then(({ data: { data } }) => {
				const arts = data.allArticles.map((art) => ({
					id: +art.id,
					key: art.id,
					title: art.title,
					date: art.date,
					short: art.short,
					img: art.img,
					content: art.content,
					category: art.category,
					source: art.source,
				}));
				setArticles(arts.sort((a, b) => b.id - a.id));
			})
			.catch(() => {
				setError('Przepraszamy, nie udało się załadować artykułów.');
			});
	}, []);

	return (
		<>
			<Router>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<Wrapper>
						<StyledMain>
							<NavContext.Provider
								value={{
									isOpen,
									toggleMobileNav,
								}}>
								<Header />
								<MobileNav />
								<DesktopNav />
							</NavContext.Provider>
							<Routes>
								<Route
									path='/'
									element={
										<Blog
											articles={articles}
											setArticles={setArticles}
											error={error}
											filteredArts={filteredArts}
										/>
									}
								/>
								<Route
									path='/about'
									element={
										<React.Suspense fallback={<Loader />}>
											<LazyAbout />
										</React.Suspense>
									}
								/>

								<Route
									path='/contact'
									element={
										<React.Suspense fallback={<Loader />}>
											<LazyContact />
										</React.Suspense>
									}
								/>

								<Route
									path='/category'
									element={<Category articles={articles} />}
								/>
								{articles.map(
									({
										id,
										title,
										short,
										category,
										content,
										img,
										date,
										source,
									}) => (
										<Route
											key={id}
											path={`/${id}`}
											element={
												<React.Suspense fallback={<Loader />}>
													<LazyFullArt
														key={id}
														title={title}
														short={short}
														category={category}
														content={content}
														img={img}
														date={date}
														source={source}
													/>
												</React.Suspense>
											}
										/>
									)
								)}
							</Routes>
						</StyledMain>
					</Wrapper>
				</ThemeProvider>
			</Router>
		</>
	);
};

export default Root;
