import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

const AppLogo = () => {
	const text = useBreakpointValue({
		base: "base",
		sm: "sm",
		md: "md",
		lg: "lg",
		xl: "xl",
		"2xl": "2xl",
	});
	return (
		<Flex alignItems={"end"} gap={"5px"}>
			<Box
				bg={{
					base: "green.500",
					sm: "blue.500",
					md: "deeppink",
					lg: "gray.400",
					xl: "tomato",
					"2xl": "cyan.900",
				}}
				p={"10"}
				rounded={"3xl"}
			></Box>
			<Text
				fontSize={"3xl"}
				fontWeight={"bold"}
				color={"gray.500"}
				display={{
					base: "none",
					sm: "inline",
				}}
			>
				{text}
			</Text>
		</Flex>
	);
};

export default AppLogo;
