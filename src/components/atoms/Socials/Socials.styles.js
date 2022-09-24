import styled from 'styled-components';

export const Wrapper = styled.div`
	padding-top: 1em;
	a {
		color: rgba(0, 0, 0, 0.4);
		font-size: ${({ theme }) => theme.fontSize.l};
		transition: color 0.2s;

		&:hover {
			color: rgba(0, 0, 0, 0.9);
		}
	}

	a {
		margin: 0 0.5em;
	}

	a:first-child {
		margin-left: 0;
	}
`;
