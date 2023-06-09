import { useRouter } from "next/router";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import axios from "axios";
export default function View({ data }) {
	console.log(data.result);
	const router = useRouter();
	return (
		<div>
			<p>
				{router.query.type}/{router.query.id}
			</p>
		</div>
	);
}

let tempData = {
	result: {
		type: "movie",
		title: "Fast X",
		overview:
			"Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
		streamingInfo: {},
		cast: [
			"Vin Diesel",
			"Michelle Rodriguez",
			"Tyrese Gibson",
			"Ludacris",
			"John Cena",
			"Nathalie Emmanuel",
			"Jordana Brewster",
		],
		year: 2023,
		advisedMinimumAudienceAge: 11,
		imdbId: "tt5433140",
		imdbRating: 63,
		imdbVoteCount: 22935,
		tmdbId: 385687,
		tmdbRating: 71,
		originalTitle: "Fast X",
		backdropPath: "/4t0oBFrJyweYPt0hocW6RUa0b6H.jpg",
		backdropURLs: {
			"300": "https://image.tmdb.org/t/p/w300/4t0oBFrJyweYPt0hocW6RUa0b6H.jpg",
			"780": "https://image.tmdb.org/t/p/w780/4t0oBFrJyweYPt0hocW6RUa0b6H.jpg",
			"1280":
				"https://image.tmdb.org/t/p/w1280/4t0oBFrJyweYPt0hocW6RUa0b6H.jpg",
			original:
				"https://image.tmdb.org/t/p/original/4t0oBFrJyweYPt0hocW6RUa0b6H.jpg",
		},
		genres: [
			{
				id: 28,
				name: "Action",
			},
			{
				id: 12,
				name: "Adventure",
			},
			{
				id: 80,
				name: "Crime",
			},
		],
		originalLanguage: "en",
		countries: ["US"],
		directors: ["Louis Leterrier"],
		runtime: 142,
		youtubeTrailerVideoId: "eoOaKN4qCKw",
		youtubeTrailerVideoLink: "https://www.youtube.com/watch?v=eoOaKN4qCKw",
		posterPath: "/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
		posterURLs: {
			"92": "https://image.tmdb.org/t/p/w92/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
			"154": "https://image.tmdb.org/t/p/w154/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
			"185": "https://image.tmdb.org/t/p/w185/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
			"342": "https://image.tmdb.org/t/p/w342/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
			"500": "https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
			"780": "https://image.tmdb.org/t/p/w780/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
			original:
				"https://image.tmdb.org/t/p/original/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
		},
		tagline: "The end of the road begins.",
	},
};

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
	const { type, id } = context.params;
	console.log(type, id);
	const options = {
		method: "GET",
		url: "https://streaming-availability.p.rapidapi.com/v2/get/basic",
		params: {
			country: "us",
			tmdb_id: `${type}/${id}`,
			output_language: "en",
		},
		headers: {
			"X-RapidAPI-Key": process.env.SA_API_KEY,
			"X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
		},
	};

	//var response = await axios.request(options);
	return {
		props: {
			data: tempData,
		},
	};
};
