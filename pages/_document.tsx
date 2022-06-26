/* eslint-disable @next/next/no-css-tags */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel="stylesheet" href="/base.css" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
