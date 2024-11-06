import PictureCard from "../atoms/PictureCard";

export default function PictureDisplay({ loading, pictureContents }) {
	if (loading) {
		return <section>Loading...</section>;
	}
	if (pictureContents) {
		const pictureList = pictureContents.map((picture, i) => (
			<PictureCard key={i} picture={picture} />
		));
		return <section>{pictureList}</section>;
	}
	return <section>Here is where my data is displayed</section>;
}
