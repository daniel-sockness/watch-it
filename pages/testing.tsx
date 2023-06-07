import { useInView } from "react-intersection-observer";
import {
	useInfiniteQuery,
	QueryClient,
	QueryClientProvider,
} from "react-query";
import axios from "axios";
import React, { useEffect } from "react";

export default function Testing() {
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
			data?.pages.map((page) => {
				console.log(page);
				page.results.map((movie) => {
					console.log(movie.title);
				});
			});
		}
	}, [inView]);
	return (
		<div>
			<h1>Infinite Loading</h1>
			<div className="test">
				<>
					{data.pages.map((page, i) => (
						<React.Fragment key={i}>
							{page.results.map((movie) => (
								<p>{movie.title}</p>
							))}
						</React.Fragment>
					))}
				</>
			</div>
			<hr />
			<div>
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
			<div>
				{isFetching && !isFetchingNextPage ? "Background Updating..." : null}
			</div>
		</div>
	);
}
