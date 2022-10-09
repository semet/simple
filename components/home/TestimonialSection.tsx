import { Avatar, Box, Grid, GridItem, Icon, Stack, Text } from "@chakra-ui/react";
import { FaQuoteRight } from "react-icons/fa";
import TestimonialShape from "../shape/TestimonialShape";
import SectionSubtitle from "../shared/SectionSubtitle";
import SectionTitle from "../shared/SectionTitle";

const TestimonialSection = () => {
	return (
		<Box
			display={"flex"}
			flexDir={"column"}
			alignItems={"center"}
			bg={"gray.50"}
			px={{ base: "2", lg: "4" }}
			pt={"10"}
			pb={"6"}
			experimental_spaceY={"6"}
			position={"relative"}
		>
			<TestimonialShape />
			<SectionTitle>testimonial</SectionTitle>
			<SectionSubtitle>What Our Customers Say About Us </SectionSubtitle>
			<Text textAlign={"center"} maxW={"container.md"}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
				gravida.
			</Text>
			<Box w={"full"}>
				<Grid
					templateColumns={{
						sm: "repeat(1, 1fr)",
						md: "repeat(2, 1fr)",
					}}
					gap={"8"}
				>
					{Array(4)
						.fill(0)
						.map((_, index) => (
							<GridItem
								w={"100%"}
								display={"flex"}
								flexDirection={{
									base: "column-reverse",
									lg: "row",
								}}
								justifyContent={"space-between"}
								alignItems={"center"}
								bgColor={"white"}
								shadow={"lg"}
								rounded={"lg"}
								role={"group"}
								p={"4"}
								key={index}
								position={"relative"}
								overflow={"hidden"}
							>
								<Box
									w={"full"}
									h={"full"}
									bg={"rgba(11, 188, 189, 0.15)"}
									filter={"blur(40px)"}
									position={"absolute"}
									top={"-1000px"}
									left={"-100px"}
									_groupHover={{
										top: "0",
									}}
									transition={"all .75s ease-in-out"}
								/>

								<Box
									position={"relative"}
									experimental_spaceY={"6"}
									pl={"6"}
									pr={"10"}
								>
									<Icon
										as={FaQuoteRight}
										fontSize={"2xl"}
										position={"absolute"}
										color={"purple.300"}
										top={"0"}
										left={"-2"}
									/>
									<Text
										textAlign={{
											base: "center",
											lg: "left",
										}}
										fontSize={{
											base: "sm",
											sm: "lg",
											md: "sm",
											lg: "lg",
										}}
									>
										It really saves me time and effort. It is exactly what our
										business has been lacking. EEZY is the most valuable
										business resource we have EVER purchased. After using EEZY
										my business skyrocketed!
									</Text>
									<Stack
										direction={"row"}
										justifyContent={{
											base: "center",
											lg: "start",
										}}
										fontSize={{
											base: "sm",
											xl: "md",
										}}
									>
										<Text fontWeight={"bold"} color={"gray.700"}>
											Dan Abrahmov
										</Text>
										<Text color={"gray.600"}> - Chief Marketing Officer</Text>
									</Stack>
								</Box>
								<Avatar
									src={"/images/team/01.jpg"}
									name={"Dan Abrahmov"}
									size={"xl"}
									mb={{
										base: "10",
										lg: "0",
									}}
								/>
							</GridItem>
						))}
				</Grid>
			</Box>
		</Box>
	);
};

export default TestimonialSection;
