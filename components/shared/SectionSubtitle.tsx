import { Heading } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
	color?: string;
	children: ReactNode;
}

const SectionSubtitle: React.FC<Props> = ({ children, color = "gray.700" }) => {
	return (
		<Heading
			as={"h5"}
			fontSize={{ base: "lg", sm: "xl", md: "2xl", lg: "3xl", xl: "5xl" }}
			color={color}
		>
			{children}
		</Heading>
	);
};

export default SectionSubtitle;
