export default function PictureCard({ picture }) {
	return (
		<article>
			<img src={picture.url} alt={picture.title} />
			<h2>{picture.title}</h2>
			<p>{picture.explanation}</p>
			<hr />
		</article>
	);
}
