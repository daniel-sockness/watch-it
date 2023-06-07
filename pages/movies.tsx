import React, { useEffect, useState } from "react";
import axios from "axios";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "react-query";
import { Button } from "flowbite-react";

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
									<div
										className="flex flex-col items-center justify-center w-[400px] h-[650px] xs:w-[250px]
                                    xs:h-[375px] rounded bg-gray-50 bg-cover dark:bg-gray-800"
										style={{
											backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
										}}
									>
										<div className="opacity-0 hover:opacity-100 hover:backdrop-blur-sm duration-300 flex flex-col items-center justify-center h-full w-full">
											<span className=" text-2xl text-gray-400 dark:text-white mb-5">
												{movie.original_title}
											</span>
											<button className="inline-block rounded border-2 border-primary-100 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-100 hover:bg-neutral-500 hover:bg-opacity-10 focus:border-primary-accent-100 focus:outline-none focus:ring-0 active:border-primary-accent-200 dark:text-primary-100 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
												View
											</button>
										</div>
									</div>
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
