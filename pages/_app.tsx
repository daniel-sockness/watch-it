import Layout from "@/components/layout";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider enableSystem={false} defaultTheme="dark" attribute="class">
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</QueryClientProvider>
	);
}
