import Link from 'next/link';
import React, { MouseEventHandler } from 'react';
import classes from './button.module.css';

type ButtonProps = {
	link?: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({ children, link, onClick }) => {
	if (link) {
		return (
			<Link href={link}>
				<a className={classes.btn}>{children}</a>
			</Link>
		);
	}

	return <button onClick={onClick!}>{children}</button>;
};

export default Button;
