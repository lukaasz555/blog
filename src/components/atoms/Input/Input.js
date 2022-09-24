import React from 'react';
import { Wrapper } from './Input.styles';

const Input = ({ id, type, onChange, value }) => (
	<Wrapper>
		<input
			id={id}
			type={type}
			value={value}
			required
			onChange={onChange}></input>
		<label htmlFor={id}>{id}</label>
		<span>
			<span></span>
		</span>
	</Wrapper>
);

export default Input;
