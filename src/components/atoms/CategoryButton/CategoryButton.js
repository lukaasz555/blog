import React from 'react';
import { StyledButton } from './CategoryButton.styles';

const CategoryButton = ({ itemName, onClick }) => (
	<StyledButton onClick={onClick}>{itemName}</StyledButton>
);

export default CategoryButton;
