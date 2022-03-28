import Link from 'next/link';
import React from 'react';

import { Event } from '../../types';

import classes from './event-item.module.css';

type EventItemProps = {
	event: Event;
};

const EventItem: React.FC<EventItemProps> = ({ event }) => {
	const { date, description, id, image, isFeatured, location, title } = event;

	const readableDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});

	const formattedAddress = location.replace(', ', '/n');
	const exploreLink = `/events/${id}`;

	return (
		<li className={classes.item}>
			<img src={'/' + image} alt={title} />
			<div className={classes.content}>
				<div>
					<h2>{title}</h2>
					<div className={classes.date}>
						<time>{readableDate}</time>
					</div>
					<div className={classes.address}>
						<address>{formattedAddress}</address>
					</div>
				</div>
				<div className={classes.actions}>
					<Link href={exploreLink}>Explore</Link>
				</div>
			</div>
		</li>
	);
};

export default EventItem;
