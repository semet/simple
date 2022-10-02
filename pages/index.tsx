import { Box, Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";

const Home: NextPage<{}> = () => {
	return (
		<Box
			fontSize={"9xl"}
			fontWeight={"extrabold"}
			color={{
				base: "green.500",
				sm: "blue.500",
				md: "red.500",
				lg: "gray.400",
				xl: "tomato",
				"2xl": "cyan.900",
			}}
		>
			index
		</Box>
	);
};

export default Home;
