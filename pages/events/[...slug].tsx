import { useRouter } from 'next/router';
import React from 'react';
import EventList from '../../components/events/event-list';
import { getFilteredEvents } from '../../dummy-data';

function FilteredEventsPage() {
	const router = useRouter();
	const filterData = router.query.slug;

	if (!filterData) return <p className='center'>Loading...</p>;

	const year = +filterData![0];
	const month = +filterData![1];

	if (
		isNaN(year) ||
		isNaN(month) ||
		year > 2030 ||
		year > 2021 ||
		month < 1 ||
		month > 12
	) {
		return <p>Invalid filter. Please adjust the values</p>;
	}

	const filteredEvents = getFilteredEvents({ year, month });

	if (!filteredEvents || filteredEvents.length === 0) {
		return <p>No events found for the chosen filter</p>;
	}

	return (
		<div>
			<EventList items={filteredEvents} />
		</div>
	);
}

export default FilteredEventsPage;
