import { Navbar } from "flowbite-react";
import { FaGithub } from "react-icons/fa";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
export default function Nav() {
	const { theme, setTheme } = useTheme();
	const router = useRouter();
	return (
		<Navbar fluid className="dark:bg-slate-700">
			<Navbar.Brand href="https://flowbite-react.com">
				<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
					Watch It
				</span>
			</Navbar.Brand>
			<div className="flex md:order-2">
				<button className="inline-flex items-center justify-center w-10 h-10 mr-2 transition-colors duration-150 rounded-lg focus:shadow-outline hover:bg-indigo-800">
					<FaGithub />
				</button>
				<button
					onClick={() =>
						theme === "dark" ? setTheme("light") : setTheme("dark")
					}
					className="inline-flex items-center justify-center w-10 h-10 mr-2 transition-colors duration-150 rounded-lg focus:shadow-outline hover:bg-indigo-800"
				>
					{theme === "dark" ? <MdDarkMode /> : <MdLightMode />}
				</button>
				<Navbar.Toggle />
			</div>
			<Navbar.Collapse>
				<Navbar.Link active={router.pathname === "/"} href="/">
					<p>Home</p>
				</Navbar.Link>
				<Navbar.Link active={router.pathname === "/movies"} href="/movies">
					<p>Movies</p>
				</Navbar.Link>
				<Navbar.Link active={router.pathname === "/shows"} href="/shows">
					<p>TV Shows</p>
				</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	);
}
