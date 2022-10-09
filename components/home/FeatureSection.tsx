import { Box, Grid, GridItem, Heading, Icon, Text } from "@chakra-ui/react";
import { FiCloud, FiGlobe, FiPlay, FiShield } from "react-icons/fi";

import ChakraBox from "../shared/ChakraBox";
import FeatureShape from "../shape/FeatureShape";
import SectionSubtitle from "../shared/SectionSubtitle";
import SectionTitle from "../shared/SectionTitle";

const features = [
	{
		icon: FiShield,
		heading: "Some Heading",
		text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quis tempora sit.`,
	},
	{
		icon: FiGlobe,
		heading: "Another Heading",
		text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quis tempora sit.`,
	},
	{
		icon: FiCloud,
		heading: "The Third One",
		text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quis tempora sit.`,
	},
	{
		icon: FiPlay,
		heading: "Ah, another one",
		text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quis tempora sit.`,
	},
];

const FeatureSection = () => {
	return (
		<Box
			display={"flex"}
			position={"relative"}
			flexDirection={{ base: "column", lg: "row" }}
			justifyContent={"space-between"}
			alignItems={"center"}
			px={{ base: "2", lg: "4" }}
			py={"6"}
			experimental_spaceY={"4"}
			bgColor={"gray.50"}
		>
			<Box
				w={{ base: "full", lg: "50%" }}
				px={"4"}
				textAlign={{ base: "center", lg: "left" }}
				experimental_spaceY={"4"}
			>
				<SectionTitle>top features</SectionTitle>
				<SectionSubtitle>
					What We Provide For Your Successful Business
				</SectionSubtitle>
				<Text color={"gray.700"} fontSize={{ base: "sm", md: "lg" }}>
					If you’re searching for talented tech minds who are dedicated to their
					work, we are a perfect fit. We are a dynamic software development company
					based in the USA. Solit workers have been working on various large-scale &
					complex projects. Solit has over 30 years of experience, always meeting
					clients.
				</Text>
			</Box>
			<Box w={{ base: "full", lg: "50%" }}>
				<Grid
					templateRows={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
					templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
					gap={"6"}
					px={{ base: "0", sm: "4" }}
				>
					{features.map((feature, index) => (
						<GridItem w={"100%"} minW={"217px"} key={index}>
							<ChakraBox
								whileHover={{
									scale: 1.05,
								}}
								whileTap={{
									scale: 0.95,
								}}
								bgGradient={"linear(to-t, cyan.400, purple.100)"}
								textAlign={"center"}
								rounded={"lg"}
								shadow={"lg"}
								px={"4"}
								py={"4"}
								experimental_spaceY={"4"}
								cursor={"pointer"}
								role={"group"}
							>
								<Icon
									as={feature.icon}
									fontSize={"7xl"}
									color={"white"}
									fill={"gray.200"}
									_groupHover={{
										transform: "rotateY(360deg)",
										transition: "all .8s ease-in-out",
									}}
								/>
								<Heading
									as={"h5"}
									fontSize={"xl"}
									fontWeight={"extrabold"}
									color={"gray.50"}
								>
									{feature.heading}
								</Heading>
								<Text
									color={"gray.50"}
									fontWeight={"semibold"}
									fontSize={{ base: "lg", lg: "sm", xl: "lg" }}
								>
									{feature.text}
								</Text>
							</ChakraBox>
						</GridItem>
					))}
				</Grid>
			</Box>
			<FeatureShape />
		</Box>
	);
};

export default FeatureSection;
