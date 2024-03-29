import Document, {Head, Html, Main, NextScript} from 'next/document';

// Prevent FOUC on Firefox due to an age-old script processing bug.
// @see {@link https://nextjs.org/docs/advanced-features/custom-document}
// @see {@link https://github.com/vercel/next.js/issues/22465}

// Also, address the Next.js ESLint warning about custom fonts not here.
// @see {@link https://nextjs.org/docs/messages/no-page-custom-font}
export default class NextDocument extends Document {
	public render(): JSX.Element {
		return (
			<Html>
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Work+Sans:wght@100&display=swap"
						rel="stylesheet"
					/>
					<link href="https://fonts.googleapis.com/css2?family=Yellowtail&display=swap" rel="stylesheet" />
					<script src="https://kit.fontawesome.com/2fe5fded4d.js" crossOrigin="anonymous"></script>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
