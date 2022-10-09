import { Box, Button, Flex, HStack, Icon, Link } from "@chakra-ui/react";
import React from "react";

interface Props {
	textColor: string;
}

const DesktopMenu: React.FC<Props> = ({ textColor }) => {
	return (
		<Box display={{ base: "none", md: "flex" }} alignItems={"center"}>
			{/* Menu items */}
			<HStack spacing={{ md: "4", lg: "8" }}>
				<Link fontSize={"xl"} fontWeight={"bold"} color={textColor}>
					Home
				</Link>
				<Link fontSize={"xl"} fontWeight={"bold"} color={textColor}>
					About
				</Link>
				<Link fontSize={"xl"} fontWeight={"bold"} color={textColor}>
					Services
				</Link>
				<Link fontSize={"xl"} fontWeight={"bold"} color={textColor}>
					Contact
				</Link>
			</HStack>
		</Box>
	);
};

export default DesktopMenu;
