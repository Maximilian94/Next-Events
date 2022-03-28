import React from 'react';
import { Events } from '../../types';
import classes from './event-list.module.css';

import EventItem from './event-item';

type EventListProps = {
	items: Events;
};

const EventList: React.FC<EventListProps> = ({ items }) => {
	return (
		<ul className={classes.list}>
			{items.map((event, index) => (
				<EventItem key={index} event={event} />
			))}
		</ul>
	);
};

export default EventList;
