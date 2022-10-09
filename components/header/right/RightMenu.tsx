import { Box, Button, Flex, Icon, IconButton } from "@chakra-ui/react";
import React, { Fragment } from "react";
import { FiLogIn } from "react-icons/fi";
import { MdMenu, MdSearch } from "react-icons/md";

const RightMenu = () => {
	return (
		<Fragment>
			<IconButton
				aria-label="Toggle menu"
				icon={<MdMenu />}
				bg={"transparent"}
				color={"gray.50"}
				fontSize={"5xl"}
				display={{ base: "flex", md: "none" }}
			/>
			<Box display={{ base: "none", md: "flex" }} alignItems={"center"} gap={"10px"}>
				<Button
					leftIcon={<FiLogIn />}
					colorScheme="linkedin"
					variant="solid"
					rounded={"3xl"}
					shadow={"lg"}
				>
					Login
				</Button>
				<Icon as={MdSearch} fontSize={"3xl"} color={"gray.200"} />
			</Box>
		</Fragment>
	);
};

export default RightMenu;
