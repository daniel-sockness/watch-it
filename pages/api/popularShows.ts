//https://api.themoviedb.org/3/movie/popular?language=en-US&page=4&api_key=6b037fd95e067be272f0517b22512249

import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	console.log("API CALLED ", req.query.page);
	// res.status(200).json({ name: "John Doe" });
	// Make our request to get our most popular movies
	const response = await axios.get(
		`https://api.themoviedb.org/3/tv/popular?language=en-US&page=${req.query.page}&api_key=${process.env.TMDB_API_KEY}`
	);
	res.status(200).json(response.data);
}
