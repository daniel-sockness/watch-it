import React, { useEffect, useState } from "react";
import axios from "axios";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "react-query";
import Card from "@/components/card";

export default function Movies() {
	const { ref, inView } = useInView();

	const {
		status,
		data,
		error,
		isFetching,
		isFetchingNextPage,
		isFetchingPreviousPage,
		fetchNextPage,
		fetchPreviousPage,
		hasNextPage,
		hasPreviousPage,
	} = useInfiniteQuery(
		["projects"],
		async ({ pageParam = 1 }) => {
			const res = await axios.get("/api/popularMovies?page=" + pageParam);
			return res.data;
		},
		{
			getNextPageParam: (lastPage) => {
				return lastPage.page < lastPage.total_pages // Here I'm assuming you have access to the total number of pages
					? lastPage.page + 1
					: undefined; // If there is not a next page, getNextPageParam will return undefined and the hasNextPage boolean will be set to 'false'
			},
		}
	);
	useEffect(() => {
		if (inView) {
			fetchNextPage();
		}
	}, [inView]);
	console.log(data);
	return (
		<div className="p-4">
			<div className="grid grid-cols-4 gap-5 mb-4">
				{status !== "loading" ? (
					<>
						{data.pages.map((page, i) => (
							<React.Fragment key={i}>
								{page.results.map((movie) => (
									<Card
										id={`movie/${movie.id}`}
										name={movie.title}
										poster_path={movie.poster_path}
									/>
								))}
							</React.Fragment>
						))}
					</>
				) : (
					<span>Getting Data</span>
				)}
			</div>
			<button
				ref={ref}
				onClick={() => fetchNextPage()}
				disabled={!hasNextPage || isFetchingNextPage}
			>
				{isFetchingNextPage
					? "Loading more..."
					: hasNextPage
					? "Load Newer"
					: "Nothing more to load"}
			</button>
		</div>
	);
}
