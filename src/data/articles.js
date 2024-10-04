import React from "react";

function article_1() {
	return {
		date: "2019 July 18",
		title: "A Tale of Two Exporters…",
		description:
			"An in-depth look at the differences between the Babylon.js-owned glTF exporters for Maya and 3ds Max.",
		keywords: [
			"Babylon.js",
			"Medium",
			"Maya",
			"Autodesk",
			"3ds Max",
			"3D",
			"Nicholas Barlow",
			"Nick Barlow",
			"drigax",
			"nicklowbar"
		],
		style: ``,
		body: (
			<React.Fragment>
				<h1>Hey! I'm not sure how you got here, but you probably shouldn't be here. <a href="../../">Get me out of here!</a></h1>
			</React.Fragment>
		),
		override_link: "https://babylonjs.medium.com/a-tale-of-two-exporters-27d81693a8e2",
	};
}

function article_2() {
	return {
		date: "2020 June 4",
		title: "Messed up 3D Meshes: A case study in the limits of integer floating point",
		description:
			"This is an explanation of a bug I encountered in the Babylon.js glTF exporter, and how I fixed it.",
		style: ``,
		keywords: [
			"Babylon.js",
			"Medium",
			"Maya",
			"Autodesk",
			"3ds Max",
			"3D",
			"Nicholas Barlow",
			"Nick Barlow",
			"drigax",
			"nicklowbar"
		],
		body: (
			<React.Fragment>
				<h1>Hey! I'm not sure how you got here, but you probably shouldn't be here. <a href="../../">Get me out of here!</a></h1>
			</React.Fragment>
		),
		override_link: "https://babylonjs.medium.com/messed-up-3d-meshes-a-case-study-in-the-limits-of-integer-floating-point-7b3b3b3b3b3b",
	};
}

function article_3() {
	return {
		date: "2020 November 11",
		title: "Retro CRT Shader - A post processing effect study",
		description:
			"This is an explanation of how I created a simple CRT-styled shader for my Babylon.js game: Rooftop Rampage.",
		style: ``,
		keywords: [
			"Babylon.js",
			"Medium",
			"CRT",
			"Shaders",
			"Post Processing",
			"Video Games",
			"Gaming",
			"Rooftop Rampage",
			"Nicholas Barlow",
			"Nick Barlow",
			"drigax",
			"nicklowbar"
		],
		body: (
			<React.Fragment>
				<h1>Hey! I'm not sure how you got here, but you probably shouldn't be here. <a href="../../">Get me out of here!</a></h1>
			</React.Fragment>
		),
		override_link: "https://babylonjs.medium.com/messed-up-3d-meshes-a-case-study-in-the-limits-of-integer-floating-point-7b3b3b3b3b3b",
	};
}

function article_4() {
	return {
		date: "2021 May 13",
		title: "Audio in Babylon Native — Charting the way",
		description:
			"This is an architectural overview of what it takes to implement cross-platform audio in Babylon Native.",
		style: ``,
		keywords: [
			"Babylon.js",
			"BabylonNative",
			"Web Audio",
			"WebAudio",
			"Software Architecture",
			"Nicholas Barlow",
			"Nick Barlow",
			"drigax",
			"nicklowbar"
		],
		body: (
			<React.Fragment>
				<h1>Hey! I'm not sure how you got here, but you probably shouldn't be here. <a href="../../">Get me out of here!</a></h1>
			</React.Fragment>
		),
		override_link: "https://babylonjs.medium.com/audio-in-babylon-native-charting-the-way-c6bc6d5c0d74",
	};
}

function article_5() {
	return {
		date: "2024 May 13",
		title: "Test Article",
		description:
			"Test Article, please ignore.",
		style: ``,
		keywords: [
			"Test",
			"Article",
			"Nicholas Barlow",
			"Nick Barlow",
			"drigax",
			"nicklowbar"
		],
		body: (
			<React.Fragment>
				<h1>Hey! I'm not sure how you got here, but you probably shouldn't be here.</h1> 
				<a href="../../">Get me out of here!</a>
			</React.Fragment>
		),
	};
}

// Sort articles by reverse chronological order
// TODO: 	We are currently using an array of functions for article data. 
//  		This is not great, because we are also using the article index as part of the URL.
// 			Since we order reverse chronologically, the most recent article will be available at
//			/articles/1. we should use a more robust data structure for ease of creating permanent
//			URLs for these articles.
const myArticles = [article_1, article_2, article_3, article_4, article_5].sort((article, other_article) => { 
	let date1 = Date.parse(article().date);
	let date2 = Date.parse(other_article().date);
	if (date1 > date2) return -1;
	if (date1 < date2) return 1;
	return 0;
});

console.log(myArticles);

export default myArticles;
