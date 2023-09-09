import "./globals.css";
import localFont from "next/font/local";

const vazirmatn = localFont({
	src: [
		{
			path: "../../public/fonts/Vazirmatn-FD-NL-Regular.woff2",
			weight: "400",
			style: "normal",
		},
	],
	variable: "--font-vazirmatn",
});

export const metadata = {
	title: "Sanjagh",
	description: "find your services",
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			dir="rtl">
			<body
				className={`${vazirmatn.className} ${vazirmatn.variable} sm:hidden`}>
				{children}
			</body>
		</html>
	);
}
