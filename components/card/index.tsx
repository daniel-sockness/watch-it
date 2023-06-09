import { useRouter } from "next/router";

export default function Card({ poster_path, name, id }) {
	const router = useRouter();
	return (
		<div
			className="flex flex-col items-center justify-center w-[400px] h-[650px] xs:w-[250px]
                                    xs:h-[375px] rounded bg-gray-50 bg-cover dark:bg-gray-800"
			style={{
				backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path})`,
			}}
		>
			<div className="opacity-0 hover:opacity-100 hover:backdrop-blur-md duration-300 flex flex-col items-center justify-center h-full w-full">
				<span className=" text-xl text-white mb-5">{name}</span>
				<button
					className="inline-block rounded border-2 border-primary-100 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:border-primary-accent-100 hover:bg-neutral-500 hover:bg-opacity-10 focus:border-primary-accent-100 focus:outline-none focus:ring-0 active:border-primary-accent-200 dark:text-primary-100 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
					onClick={() => router.push(`/view/${id}`)}
				>
					View
				</button>
			</div>
		</div>
	);
}
