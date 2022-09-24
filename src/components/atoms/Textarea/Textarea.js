import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { Wrapper } from './Textarea.styles';

const Textarea = ({ id, onChange, value }) => (
	<Wrapper>
		<TextareaAutosize id={id} required onChange={onChange} value={value} />
		<label htmlFor={id}>{id}</label>
		<span>
			<span></span>
		</span>
	</Wrapper>
);

export default Textarea;
