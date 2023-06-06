import { Label, TextInput, Select, Button } from "flowbite-react";

export default function Home() {
	return (
		<div className="grid h-screen place-items-center">
			<form className="flex flex-col gap-4 w-1/2">
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
	);
}
