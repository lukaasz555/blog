import React, { useState } from 'react';
import Article from 'components/organisms/Article/Article';
import { Wrapper, StyledTop } from './Category.styles';
import CategoryButton from 'components/atoms/CategoryButton/CategoryButton';

const Category = ({ articles }) => {
	const getCategories = () => {
		const categories = new Set(articles.map((item) => item.category));
		return [...categories];
	};

	const [filteredCategories, setFilteredCategories] = useState([]);

	const handleFilter = (e) => {
		if (articles) {
			const filteredArts = articles.filter(
				(art) => art.category === e.target.textContent
			);
			setFilteredCategories(filteredArts);
		}
	};

	return (
		<Wrapper>
			{articles && (
				<>
					<StyledTop>
						<h1>Wybierz kategorię:</h1>

						{getCategories().map((item) => (
							<CategoryButton
								key={item}
								itemName={item}
								onClick={handleFilter}
							/>
						))}
					</StyledTop>

					{filteredCategories &&
						filteredCategories.map((art) => (
							<Article
								title={art.title}
								short={art.short}
								category={art.category}
								date={art.date}
								key={art.id}
								id={art.id}
							/>
						))}
				</>
			)}
		</Wrapper>
	);
};
export default Category;
