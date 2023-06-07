import { NextApiRequest, NextApiResponse } from "next";

let tempData = {
	variant: "rapidapi_basic",
	results: [
		{
			locations: [
				{
					display_name: "Netflix",
					id: "5d84d6e2d95dc7385f6a442d",
					url: "https://www.netflix.com/title/70298933",
					name: "NetflixIVAGB",
					icon: "https://utellyassets7.imgix.net/locations_icons/utelly/black_new/NetflixIVAGB.png?w=92&auto=compress&app_version=23f8e481-9672-42ce-b1c8-b950bb12d45a_e12122021-01-29",
				},
			],
			weight: 5653,
			id: "5d914028302b840050acbe62",
			external_ids: {
				imdb: {
					url: "https://www.imdb.com/title/tt3398228",
					id: "tt3398228",
				},
				tmdb: {
					url: "https://www.themoviedb.org/tv/61222",
					id: "61222",
				},
				iva: {
					id: "783721",
				},
				facebook: null,
				rotten_tomatoes: null,
				wiki_data: {
					url: "https://www.wikidata.org/wiki/Q17733404",
					id: "Q17733404",
				},
				iva_rating: null,
				gracenote: null,
			},
			picture:
				"https://utellyassets9-1.imgix.net/api/Images/4e4d50a0040fd4500193202edbafce6a/Redirect?fit=crop&auto=compress&crop=faces,top",
			provider: "iva",
			name: "BoJack Horseman",
		},
	],
	updated: "2021-01-29T05:09:14+0000",
	term: "bojack",
	status_code: 200,
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "POST") {
		console.log(req.body.search);
		res.json(tempData);
	} else {
		res.status(405).send("Method not allowed");
	}
}
