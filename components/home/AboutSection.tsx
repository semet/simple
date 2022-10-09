/* eslint-disable react/no-unescaped-entities */

import { AspectRatio, Box, Grid, GridItem, Icon, Image, Text } from "@chakra-ui/react";
import { FiCpu, FiGlobe, FiLayout, FiPhone, FiShield } from "react-icons/fi";

import ChakraBox from "../shared/ChakraBox";
import SectionSubtitle from "../shared/SectionSubtitle";
import SectionTitle from "../shared/SectionTitle";

const services = [
	{
		id: 1,
		icon: FiShield,
		heading: "Cyber Security",
		text: "There are many variations of passages of Lorem Ipsum available",
	},
	{
		id: 2,
		icon: FiCpu,
		heading: "Data Analytics",
		text: "There are many variations of passages of Lorem Ipsum available",
	},
	{
		id: 3,
		icon: FiLayout,
		heading: "Web Development",
		text: "There are many variations of passages of Lorem Ipsum available",
	},
	{
		id: 4,
		icon: FiGlobe,
		heading: "SEO Optimization",
		text: "There are many variations of passages of Lorem Ipsum available",
	},
];

const AboutSection = () => {
	return (
		<Box
			display={"flex"}
			flexDirection={{ base: "column", lg: "row" }}
			justifyContent={"space-between"}
			alignItems={{ base: "start", lg: "center" }}
			bgImage={"/images/pattern/4859276.png"}
			bgRepeat={"no-repeat"}
			bgPosition={"center"}
			bgSize={"cover"}
			px={{ base: "2", md: "4" }}
			py={"2"}
		>
			<ChakraBox
				w={{ base: "full", lg: "50%" }}
				alignSelf={"center"}
				pr={"6"}
				initial={{
					translateX: 0,
				}}
				animate={{
					translateY: [10, 20, 20, 10, 10],
				}}
				// @ts-ignore no problem in operation, although type error appears.
				transition={{
					duration: 6,
					ease: "easeInOut",
					repeat: Infinity,
					repeatType: "loop",
				}}
			>
				<AspectRatio maxW="550px" ratio={4 / 3} mx={"auto"}>
					<Image src={"/images/hero/2672333.png"} alt={"About us"} />
				</AspectRatio>
			</ChakraBox>

			<Box
				w={{ base: "full", lg: "50%" }}
				mt={"14"}
				textAlign={{ base: "center", lg: "left" }}
				experimental_spaceY={"6"}
			>
				<ChakraBox
					initial={{
						opacity: 0,
						translateX: 50,
					}}
					animate={{
						opacity: 1,
						translateX: 0,
					}}
					// @ts-ignore no problem in operation, although type error appears.
					transition={{
						duration: 1,
						ease: "easeInOut",
					}}
				>
					<SectionTitle>about us</SectionTitle>
				</ChakraBox>
				<ChakraBox
					initial={{
						opacity: 0,
						translateX: -50,
					}}
					animate={{
						opacity: 1,
						translateX: 0,
					}}
					// @ts-ignore no problem in operation, although type error appears.
					transition={{
						duration: 1,
						ease: "easeInOut",
					}}
				>
					<SectionSubtitle>
						Manages IT Service Across Various Business
					</SectionSubtitle>
				</ChakraBox>
				<ChakraBox
					initial={{
						opacity: 0,
						translateY: 50,
					}}
					animate={{
						opacity: 1,
						translateY: 0,
					}}
					// @ts-ignore no problem in operation, although type error appears.
					transition={{
						duration: 1,
						ease: "easeInOut",
					}}
				>
					<Text color={"gray.700"} fontSize={{ base: "sm", md: "lg" }}>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text ever
						since the 1500s, when an unknown printer took a galley of type
					</Text>
				</ChakraBox>
				<Grid
					templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
					gap={"6"}
				>
					{services.map((service) => (
						<GridItem
							display={"flex"}
							flexDirection={{ base: "column", lg: "row" }}
							justifyContent={{ base: "center", lg: "start" }}
							alignItems={{ base: "center", lg: "start" }}
							experimental_spaceY={{ base: "2", lg: "0" }}
							experimental_spaceX={{ base: "0", lg: "4" }}
							cursor={"pointer"}
							role={"group"}
							key={service.id}
						>
							<Icon
								as={service.icon}
								fontSize={{ base: "3xl", sm: "5xl" }}
								color={"blue.700"}
								_groupHover={{
									color: "teal.500",
									transform: "rotateX(360deg)",
									transition: "all .8s ease-in-out",
								}}
							/>
							<Box
								textAlign={{ base: "center", lg: "left" }}
								experimental_spaceY={"2"}
								maxW={"prose"}
							>
								<Text
									fontWeight={"bold"}
									fontSize={{
										base: "sm",
										sm: "md",
										md: "xl",
										lg: "lg",
										xl: "xl",
									}}
								>
									{service.heading}
								</Text>
								<Text fontSize={{ base: "sm", sm: "md", lg: "sm", xl: "md" }}>
									{service.text}
								</Text>
							</Box>
						</GridItem>
					))}
				</Grid>
				<Box
					display={"flex"}
					flexDirection={{ base: "column", md: "row" }}
					justifyContent={"space-between"}
					alignItems={"center"}
					bg={"blue.500"}
					color={"white"}
					position={"relative"}
					p={"6"}
					rounded={"lg"}
					_before={{
						content: "''",
						width: "100%",
						height: "100%",
						bgColor: "blue.100",
						position: "absolute",
						top: "-3",
						left: "-2",
						rounded: "lg",
						zIndex: "-1",
						filter: "blur(5px)",
					}}
				>
					<Text fontSize={{ base: "md", sm: "xl" }} fontWeight={"bold"}>
						Get in touch
					</Text>
					<Box
						display={"flex"}
						alignItems={"center"}
						experimental_spaceX={"2"}
						experimental_spaceY={{ base: "4", md: "0" }}
					>
						<Icon as={FiPhone} fontSize={{ base: "2xl", md: "3xl" }} />
						<Text fontSize={{ base: "md", sm: "xl" }} fontFamily={"Poppins"}>
							+628737760307
						</Text>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default AboutSection;
