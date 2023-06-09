//TODO Add Infinite Scroll to this page

import { Label, TextInput, Select, Button } from "flowbite-react";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import Card from "@/components/card";
export default function Home() {
	const [data, setData] = useState();
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
		<div class="p-4 sm:ml-64">
			<div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
				<div class="grid grid-cols-3 gap-4 mb-4">
					<div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
						<p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
					</div>
					<div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
						<p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
					</div>
					<div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
						<p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
					</div>
				</div>
				<div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
					<p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
				</div>
				<div class="grid grid-cols-2 gap-4 mb-4">
					<div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
						<p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
					</div>
					<div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
						<p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
					</div>
					<div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
						<p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
					</div>
					<div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
						<p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
					</div>
				</div>
				<div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
					<p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
				</div>
				<div class="grid grid-cols-2 gap-4">
					<div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
						<p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
					</div>
					<div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
						<p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
					</div>
					<div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
						<p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
					</div>
					<div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
						<p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
					</div>
				</div>
			</div>
		</div>
	);
}
