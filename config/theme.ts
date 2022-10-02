import "@fontsource/poppins";
import "@fontsource/raleway";

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	colors: {
		brand: "#29ace2",
	},
	fonts: {
		heading: `'Poppins', sans-serif`,
		body: `'Raleway', sans-serif`,
	},
});

export default theme;
