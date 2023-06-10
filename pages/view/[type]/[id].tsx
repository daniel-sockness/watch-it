import { useRouter } from "next/router";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import axios from "axios";
export default function View({ data }) {
	console.log(data.result);
	const router = useRouter();
	return (
		<div className="p-4">
			<div className="p-4 rounded-lg">
				<div className="grid grid-cols-3 gap-4 mb-4">
					<div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
						<p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
					</div>
					<div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
						<p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
					</div>
					<div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
						<p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
					</div>
				</div>
			</div>
		</div>
	);
}

let tempData = {
	result: {
		type: "movie",
		title: "District 9",
		overview:
			"Thirty years ago, aliens arrive on Earth. Not to conquer or give aid, but to find refuge from their dying planet. Separated from humans in a South African area called District 9, the aliens are managed by Multi-National United, which is unconcerned with the aliens' welfare but will do anything to master their advanced technology. When a company field agent contracts a mysterious virus that begins to alter his DNA, there is only one place he can hide: District 9.",
		streamingInfo: {
			us: {
				hbo: [
					{
						type: "subscription",
						quality: "hd",
						addOn: "",
						link: "https://play.hbomax.com/page/urn:hbo:page:GYwb57wTKd63CwwEAAAaX:type:feature",
						watchLink:
							"https://play.hbomax.com/feature/urn:hbo:feature:GYwb57wTKd63CwwEAAAaX",
						audios: [
							{
								language: "eng",
								region: "USA",
							},
						],
						subtitles: [
							{
								locale: {
									language: "eng",
									region: "USA",
								},
								closedCaptions: true,
							},
						],
						price: null,
						leaving: 16961436000,
						availableSince: 1664790681,
					},
				],
				hulu: [
					{
						type: "addon",
						quality: "hd",
						addOn: "hbo",
						link: "https://www.hulu.com/movie/district-9-3f92988b-d379-466f-8bac-f4d315f72a1d",
						watchLink:
							"https://www.hulu.com/watch/3f92988b-d379-466f-8bac-f4d315f72a1d",
						audios: [
							{
								language: "eng",
								region: "",
							},
						],
						subtitles: [
							{
								locale: {
									language: "eng",
									region: "",
								},
								closedCaptions: false,
							},
						],
						price: null,
						leaving: 1696143600,
						availableSince: 1664943641,
					},
				],
				prime: [
					{
						type: "rent",
						quality: "sd",
						addOn: "",
						link: "https://www.amazon.com/gp/video/detail/B002WTOXUK/ref=atv_dp?language=en",
						watchLink: "",
						audios: [
							{
								language: "eng",
								region: "",
							},
						],
						subtitles: [
							{
								locale: {
									language: "eng",
									region: "",
								},
								closedCaptions: true,
							},
						],
						price: {
							amount: "3.59",
							currency: "USD",
							formatted: "3.59 USD",
						},
						leaving: 0,
						availableSince: 1675504214,
					},
					{
						type: "rent",
						quality: "hd",
						addOn: "",
						link: "https://www.amazon.com/gp/video/detail/B002WTOXUK/ref=atv_dp?language=en",
						watchLink: "",
						audios: [
							{
								language: "eng",
								region: "",
							},
						],
						subtitles: [
							{
								locale: {
									language: "eng",
									region: "",
								},
								closedCaptions: true,
							},
						],
						price: {
							amount: "3.89",
							currency: "USD",
							formatted: "3.89 USD",
						},
						leaving: 0,
						availableSince: 1675504214,
					},
					{
						type: "buy",
						quality: "sd",
						addOn: "",
						link: "https://www.amazon.com/gp/video/detail/B002WTOXUK/ref=atv_dp?language=en",
						watchLink: "",
						audios: [
							{
								language: "eng",
								region: "",
							},
						],
						subtitles: [
							{
								locale: {
									language: "eng",
									region: "",
								},
								closedCaptions: true,
							},
						],
						price: {
							amount: "4.99",
							currency: "USD",
							formatted: "4.99 USD",
						},
						leaving: 0,
						availableSince: 1675504214,
					},
					{
						type: "rent",
						quality: "uhd",
						addOn: "",
						link: "https://www.amazon.com/gp/video/detail/B002WTOXUK/ref=atv_dp?language=en",
						watchLink: "",
						audios: [
							{
								language: "eng",
								region: "",
							},
						],
						subtitles: [
							{
								locale: {
									language: "eng",
									region: "",
								},
								closedCaptions: true,
							},
						],
						price: {
							amount: "3.89",
							currency: "USD",
							formatted: "3.89 USD",
						},
						leaving: 0,
						availableSince: 1675504214,
					},
					{
						type: "buy",
						quality: "hd",
						addOn: "",
						link: "https://www.amazon.com/gp/video/detail/B002WTOXUK/ref=atv_dp?language=en",
						watchLink: "",
						audios: [
							{
								language: "eng",
								region: "",
							},
						],
						subtitles: [
							{
								locale: {
									language: "eng",
									region: "",
								},
								closedCaptions: true,
							},
						],
						price: {
							amount: "4.99",
							currency: "USD",
							formatted: "4.99 USD",
						},
						leaving: 0,
						availableSince: 1675504214,
					},
					{
						type: "addon",
						quality: "uhd",
						addOn: "cinemax",
						link: "https://www.amazon.com/gp/video/detail/B002WTOXUK/ref=atv_dp?language=en",
						watchLink: "",
						audios: [
							{
								language: "eng",
								region: "",
							},
						],
						subtitles: [
							{
								locale: {
									language: "eng",
									region: "",
								},
								closedCaptions: true,
							},
						],
						price: null,
						leaving: 0,
						availableSince: 1680515868,
					},
					{
						type: "buy",
						quality: "uhd",
						addOn: "",
						link: "https://www.amazon.com/gp/video/detail/B002WTOXUK/ref=atv_dp?language=en",
						watchLink: "",
						audios: [
							{
								language: "eng",
								region: "",
							},
						],
						subtitles: [
							{
								locale: {
									language: "eng",
									region: "",
								},
								closedCaptions: true,
							},
						],
						price: {
							amount: "4.99",
							currency: "USD",
							formatted: "4.99 USD",
						},
						leaving: 0,
						availableSince: 1675504214,
					},
				],
			},
		},
		cast: [
			"Sharlto Copley",
			"Jason Cope",
			"Nathalie Boltt",
			"Sylvaine Strike",
			"Elizabeth Mkandawie",
			"John Sumner",
			"William Allen Young",
		],
		year: 2009,
		advisedMinimumAudienceAge: 16,
		imdbId: "tt1136608",
		imdbRating: 79,
		imdbVoteCount: 694457,
		tmdbId: 17654,
		tmdbRating: 74,
		originalTitle: "District 9",
		backdropPath: "/jhM3wgWUrrOkz9r4xwV5cV5RhI4.jpg",
		backdropURLs: {
			"300": "https://image.tmdb.org/t/p/w300/jhM3wgWUrrOkz9r4xwV5cV5RhI4.jpg",
			"780": "https://image.tmdb.org/t/p/w780/jhM3wgWUrrOkz9r4xwV5cV5RhI4.jpg",
			"1280":
				"https://image.tmdb.org/t/p/w1280/jhM3wgWUrrOkz9r4xwV5cV5RhI4.jpg",
			original:
				"https://image.tmdb.org/t/p/original/jhM3wgWUrrOkz9r4xwV5cV5RhI4.jpg",
		},
		genres: [
			{
				id: 28,
				name: "Action",
			},
			{
				id: 878,
				name: "Science Fiction",
			},
			{
				id: 53,
				name: "Thriller",
			},
		],
		originalLanguage: "en",
		countries: ["NZ", "ZA", "US"],
		directors: ["Neill Blomkamp"],
		runtime: 112,
		youtubeTrailerVideoId: "_BjWEn5yvmw",
		youtubeTrailerVideoLink: "https://www.youtube.com/watch?v=_BjWEn5yvmw",
		posterPath: "/tuGlQkqLxnodDSk6mp5c2wvxUEd.jpg",
		posterURLs: {
			"92": "https://image.tmdb.org/t/p/w92/tuGlQkqLxnodDSk6mp5c2wvxUEd.jpg",
			"154": "https://image.tmdb.org/t/p/w154/tuGlQkqLxnodDSk6mp5c2wvxUEd.jpg",
			"185": "https://image.tmdb.org/t/p/w185/tuGlQkqLxnodDSk6mp5c2wvxUEd.jpg",
			"342": "https://image.tmdb.org/t/p/w342/tuGlQkqLxnodDSk6mp5c2wvxUEd.jpg",
			"500": "https://image.tmdb.org/t/p/w500/tuGlQkqLxnodDSk6mp5c2wvxUEd.jpg",
			"780": "https://image.tmdb.org/t/p/w780/tuGlQkqLxnodDSk6mp5c2wvxUEd.jpg",
			original:
				"https://image.tmdb.org/t/p/original/tuGlQkqLxnodDSk6mp5c2wvxUEd.jpg",
		},
		tagline: "You are not welcome here.",
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
