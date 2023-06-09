import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "POST") {
		var data;
		if (req.body.type === "movie") {
			const response = await axios.get(
				`https://api.themoviedb.org/3/search/movie?language=en-US&include_adult=false&page=${req.body.page}&api_key=${process.env.TMDB_API_KEY}&query=${req.body.search}}`
			);
			data = response.data;
			data.type = "movie";
			console.log(data);
		} else if (req.body.type === "show") {
			const response = await axios.get(
				`https://api.themoviedb.org/3/search/tv?language=en-US&include_adult=false&page=${req.query.page}&api_key=${process.env.TMDB_API_KEY}&query=${req.body.search}`
			);
			data = response.data;
			data.type = "tv";
		} else {
		}
		res.json(data);
	} else {
		res.status(405).send("Method not allowed");
	}
}
