import { Label, TextInput, Select, Button } from "flowbite-react";

export default function Home() {
	return (
		<div className="p-4">
			<div className="p-4 rounded-lg dark:border-gray-700">
				<div className="flex items-center justify-center mb-4 rounded bg-gray-50 dark:bg-gray-800">
					<form className="flex flex-col gap-4 w-5/6 mb-2">
						<div>
							<div className="mb-2 block">
								<Label htmlFor="name" value="Movie/Show Name" />
							</div>
							<TextInput id="name" required type="text" />
						</div>
						<Select id="type" name="type" required>
							<option value="any">Any</option>
							<option value="movie">Movie</option>
							<option value="series">Show</option>
						</Select>
						<Button type="submit">Search</Button>
					</form>
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
		</div>
	);
}
