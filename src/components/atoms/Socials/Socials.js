import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faInstagram,
	faTwitter,
	faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { Wrapper } from './Socials.styles';

const Socials = (props) => {
	return (
		<Wrapper>
			{JSON.stringify(props.linked) === '' ? null : (
				<a href={props.linked}>
					<FontAwesomeIcon icon={faLinkedinIn} />
				</a>
			)}

			{JSON.stringify(props.twitter) === '' ? null : (
				<a href={props.twitter}>
					<FontAwesomeIcon icon={faTwitter} />
				</a>
			)}

			{JSON.stringify(props.insta) === '' ? null : (
				<a href={props.insta}>
					<FontAwesomeIcon icon={faInstagram} />
				</a>
			)}
		</Wrapper>
	);
};

export default Socials;
