import { Label, TextInput, Select, Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery, useQueryClient } from "react-query";
export default function Home() {
	const queryClient = useQueryClient();
	const [title, setTitle] = useState("");
	const [type, setType] = useState("movie");
	const handleSubmit = async () => {
		console.log("Clicked submitting search");
		var response = await axios.post("/api/search", {
			search: title,
			type: type,
		});
		console.log(response.data);
	};

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
		["search"],
		async ({ pageParam = 1 }) => {
			const res = await axios.post("/api/search", {
				search: title,
				type: type,
				page: pageParam,
			});
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

	return (
		<div className="p-4">
			<div className="p-4 rounded-lg dark:border-gray-700">
				<div className="flex items-center justify-center mb-4 rounded bg-gray-50 dark:bg-gray-800">
					<div className="flex flex-col gap-4 w-5/6 mb-2">
						<div>
							<div className="mb-2 block">
								<Label htmlFor="name" value="Movie/Show Name" />
							</div>
							<TextInput
								id="name"
								required
								type="text"
								value={title}
								onChange={(e) => {
									setTitle(e.currentTarget.value);
									queryClient.resetQueries();
								}}
							/>
						</div>
						<Select
							id="type"
							name="type"
							required
							onChange={(e) => setType(e.currentTarget.value)}
						>
							<option value="movie">Movie</option>
							<option value="series">Show</option>
						</Select>
						<Button type="submit" onClick={handleSubmit}>
							Search
						</Button>
					</div>
				</div>
				<div className="grid grid-cols-4 gap-4 mb-4">
					<div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
						<p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
					</div>
					<div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
						<p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
					</div>
					<div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
						<p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
					</div>
					<div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
						<p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
					</div>
				</div>
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
