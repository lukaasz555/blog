import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';
import Input from 'components/atoms/Input/Input';
import Textarea from 'components/atoms/Textarea/Textarea';
import SendButton from 'components/atoms/SendButton/SendButton';
import { renderWithThemeProvider } from 'providers/renderWithThemeProvider';

describe('contact form - component', () => {
	it('render inputs', () => {
		renderWithThemeProvider(
			<ContactForm>
				<Input id='name' placeholder='name'></Input>
				<Input id='email' placeholder='email'></Input>
				<Textarea id='message' placeholder='Your message' />
				<SendButton />
			</ContactForm>
		);
		const input = screen.queryByRole('input');
		const input2 = screen.queryByPlaceholderText('name');
		const textarea = screen.queryByPlaceholderText('Your message');
	});
});
