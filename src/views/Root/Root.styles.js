import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;
`;

export const StyledMain = styled.main`
	background-color: ${({ theme }) => theme.colors.white};
	width: 100%;
	min-height: 100vh;
	overflow-x: hidden;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 12px 28px 0px,
		rgba(0, 0, 0, 0.1) 0px 2px 4px 0px;
	position: relative;
	margin-bottom: 30px;
	border-bottom-left-radius: 7px;
	border-bottom-right-radius: 7px;

	@media (min-width: 901px) {
		width: 900px;
	}
`;
