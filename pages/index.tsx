//TODO Add Infinite Scroll to this page

import { Label, TextInput, Select, Button } from "flowbite-react";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import Card from "@/components/card";
export default function Home() {
	const [data, setData] = useState([]);
	const totalPages = data?.total_pages;
	const [title, setTitle] = useState("");
	const [page, setPage] = useState(1);
	const [type, setType] = useState("all");
	const handleSubmit = async () => {
		console.log("Clicked submitting search");
		var response = await axios.post("/api/search", {
			search: title,
			type: type,
			page,
		});
		setData(response.data);
		console.log(response.data);
	};

	const handlePageClick = async (newPage) => {
		setPage(newPage);
	};

	useEffect(() => {
		async function updatePage() {
			var response = await axios.post("/api/search", {
				search: title,
				type: type,
				page: page,
			});
			setData(response.data);
		}
		updatePage();
	}, [page]);

	const renderPageButtons = () => {
		const buttons = [];
		for (let i = 1; i <= totalPages; i++) {
			buttons.push(
				<button
					key={i}
					onClick={() => handlePageClick(i)}
					className={`border rounded px-3 py-2 mx-1 ${
						i === page
							? "bg-blue-500 text-white"
							: "bg-gray-200 dark:bg-slate-600"
					}`}
				>
					{i}
				</button>
			);
		}
		return buttons;
	};
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
								onChange={(e) => setTitle(e.currentTarget.value)}
							/>
						</div>
						<Select
							id="type"
							name="type"
							required
							onChange={(e) => setType(e.currentTarget.value)}
						>
							<option value="any">Any</option>
							<option value="movie">Movie</option>
							<option value="series">Show</option>
						</Select>
						<Button type="submit" onClick={handleSubmit}>
							Search
						</Button>
					</div>
				</div>
				<div className="grid grid-cols-4 gap-4 mb-4">
					{data && data.results ? (
						<>
							<React.Fragment>
								{data.results.map((result, i) => (
									<React.Fragment key={i}>
										<Card
											poster_path={result.poster_path}
											id={result.id}
											name={result.title}
										/>
									</React.Fragment>
								))}
							</React.Fragment>
						</>
					) : null}
				</div>
				{data ? (
					<div className="flex justify-center w-full">
						{renderPageButtons()}
					</div>
				) : null}
			</div>
		</div>
	);
}
