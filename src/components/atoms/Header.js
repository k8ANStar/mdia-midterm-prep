export default function Header({ loading, fetchPicture }) {
	return (
		<header className="m-4">
			<h1>Midterm submission</h1>
			<button
				disabled={loading}
				className="border-2 p-2 border-teal-800 rounded-md bg-teal-100"
				onClick={fetchPicture}
			>
				Fetch 👽
			</button>
		</header>
	);
}
