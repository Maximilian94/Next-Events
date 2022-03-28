import React from 'react';
import EventList from '../../components/events/event-list';
import { getAllEvents } from '../../dummy-data';
import EventsSearch from '../../components/events/events-search';
import { useRouter } from 'next/router';

function AllEvents() {
	const router = useRouter();
	const events = getAllEvents();

	const findEventsHandle = (year: string, month: string) => {
		const fullPath = `events/${year}/${month}`;
		router.push(fullPath);
	};

	return (
		<div>
			<EventsSearch onSearch={findEventsHandle} />
			<EventList items={events} />
		</div>
	);
}

export default AllEvents;
