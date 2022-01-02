import Document, { Html, Head, Main, NextScript } from "next/document";

// Point: Head imported from document can only be used inside _document component.

//Important:  We edit this _document in order to reconfigure it!
class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head />
				<body id="portal">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
