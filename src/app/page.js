"use client";
import { useState } from "react";
import Header from "@/components/atoms/Header";
import PictureDisplay from "@/components/molecules/PictureDisplay";

export default function Home() {
	const [pictureContents, setPictureContents] = useState(null);
	const [loading, setLoading] = useState(false);

	async function fetchPicture() {
		setLoading(true);
		const API_URL =
			"https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5";
		const response = await fetch(API_URL);
		const data = await response.json();
		setPictureContents(data);
		setLoading(false);
	}

	return (
		<div className="m-8">
			<Header loading={loading} fetchPicture={fetchPicture} />
			<PictureDisplay loading={loading} pictureContents={pictureContents} />
		</div>
	);
}

//implementaton
// pick an api X
// build a button component that has a fetch action/clear action X
// build a component thats displays our data (should have an empty and fulfilled state) X
// build a function that will fetch some data X
// format and handle the data
// (error handling do on own)
// style our app and create breakpoints
//component for our button to sit in
// clean code
