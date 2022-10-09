import {
	Box,
	Center,
	Circle,
	Grid,
	GridItem,
	Heading,
	Icon,
	Image,
	Link,
	Stack,
	Text,
} from "@chakra-ui/react";
import {
	FaFacebookF,
	FaLinkedinIn,
	FaTwitch,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";

import SectionSubtitle from "../shared/SectionSubtitle";
import SectionTitle from "../shared/SectionTitle";
import TeamShape from "../shape/TestimonialShape";
import { motion } from "framer-motion";

const teams = [
	{
		name: "Hamdani Ash-Sidiq",
		position: "Fullstack Developer",
		image: "/images/team/01.jpg",
	},
	{
		name: "Zul Fahmi",
		position: "UI/UX Designer",
		image: "/images/team/04.jpg",
	},
	{
		name: "Irhas Al-Ansory",
		position: "Marketing Specialist",
		image: "/images/team/08.jpg",
	},
	{
		name: "Nita Yulliana",
		position: "Marketing Team",
		image: "/images/team/02.jpg",
	},
];

const TeamSection = () => {
	return (
		<Box
			display={"flex"}
			flexDir={"column"}
			alignItems={"center"}
			px={{ base: "2", lg: "4" }}
			pt={"10"}
			pb={"6"}
			position={"relative"}
			experimental_spaceY={"6"}
		>
			<SectionTitle>our team</SectionTitle>
			<SectionSubtitle>Meet Awesome People</SectionSubtitle>
			<Text textAlign={"center"} maxW={"container.md"}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
				gravida.
			</Text>
			<Box w={"full"}>
				<Grid
					templateColumns={{
						base: "repeat(1, 1fr)",
						sm: "repeat(2, 1fr)",
						lg: "repeat(4, 1fr)",
					}}
					gap={6}
				>
					{teams.map((team, index) => (
						<GridItem
							w={"full"}
							bg={"white"}
							shadow={"lg"}
							display={"flex"}
							flexDirection={"column"}
							position={"relative"}
							rounded={"lg"}
							key={index}
							zIndex={"9"}
							// _before={{
							// 	content: "''",
							// 	width: "102%",
							// 	height: "102%",
							// 	bgColor: "teal.100",
							// 	position: "absolute",
							// 	top: -1,
							// 	left: -1,
							// 	rounded: "lg",
							// 	zIndex: "-1",
							// 	filter: "blur(10px)",
							// }}
						>
							<Box overflow={"hidden"} w={"full"}>
								<Image
									src={team.image}
									alt={team.name}
									roundedTop={"lg"}
									w={"full"}
								/>
							</Box>
							<Stack textAlign={"center"} p={"4"}>
								<Heading
									as={"h5"}
									fontSize={{
										base: "2xl",
										sm: "lg",
										md: "2xl",
										lg: "lg",
										xl: "2xl",
									}}
									letterSpacing={"wider"}
								>
									{team.name}
								</Heading>
								<Text fontSize={{ base: "sm", md: "md", lg: "sm", xl: "md" }}>
									{team.position}
								</Text>
								<SocialLinks />
							</Stack>
						</GridItem>
					))}
				</Grid>
			</Box>
			{/* <TeamShape /> */}
		</Box>
	);
};

export default TeamSection;

const SocialLinks = () => {
	return (
		<Center
			as={motion.div}
			experimental_spaceX={"-3"}
			whileHover={{
				gap: "15px",
			}}
		>
			<Link href={"#"}>
				<Circle size={"30px"} bg={"blue.600"} color={"gray.50"} shadow={"lg"}>
					<Icon as={FaFacebookF} />
				</Circle>
			</Link>
			<Link href={"#"}>
				<Circle size={"30px"} bg={"twitter.500"} color={"gray.50"} shadow={"lg"}>
					<Icon as={FaTwitter} />
				</Circle>
			</Link>
			<Link href={"#"}>
				<Circle size={"30px"} bg={"blue.700"} color={"gray.50"} shadow={"lg"}>
					<Icon as={FaLinkedinIn} />
				</Circle>
			</Link>
			<Link href={"#"}>
				<Circle size={"30px"} bg={"red.500"} color={"gray.50"} shadow={"lg"}>
					<Icon as={FaYoutube} />
				</Circle>
			</Link>
			<Link href={"#"}>
				<Circle size={"30px"} bg={"purple.500"} color={"gray.50"} shadow={"lg"}>
					<Icon as={FaTwitch} />
				</Circle>
			</Link>
		</Center>
	);
};
