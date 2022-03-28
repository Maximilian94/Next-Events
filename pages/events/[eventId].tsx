import React from 'react';
import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';

function EventId() {
	const router = useRouter();
	const eventId = router.query.eventId;
	const event = getEventById(eventId);

	if (!event) return <p>No event found</p>;

	return <div>Um evento</div>;
}

export default EventId;
