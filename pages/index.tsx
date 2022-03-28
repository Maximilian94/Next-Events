import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import { getFeaturedEvents } from '../dummy-data';

import EventList from '../components/events/event-list';

const Home: NextPage = () => {
	const featureEvents = getFeaturedEvents();

	return (
		<div>
			<h1>The Home Page</h1>
			<EventList items={featureEvents} />
		</div>
	);
};

export default Home;
