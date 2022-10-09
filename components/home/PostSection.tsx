import {
	Box,
	Circle,
	Grid,
	GridItem,
	Heading,
	Icon,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";
import React from "react";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FiCalendar, FiBox, FiUser, FiArrowRight } from "react-icons/fi";
import PostShape from "../shape/PostShape";
import SectionSubtitle from "../shared/SectionSubtitle";
import SectionTitle from "../shared/SectionTitle";

const PostSection = () => {
	return (
		<Box
			display={"flex"}
			flexDir={"column"}
			alignItems={"center"}
			px={{ base: "2", lg: "16" }}
			pt={"6"}
			pb={"6"}
			position={"relative"}
			experimental_spaceY={"6"}
			bg={"#8037e9"}
			bgImage={"/images/pattern/abstract_shape_1.png"}
			bgRepeat={"no-repeat"}
			bgPosition={"center"}
		>
			{/* Top Shape */}
			<PostShape />
			<SectionTitle color="gray.100" textBackdrop="blackAlpha.400">
				latest posts
			</SectionTitle>
			<SectionSubtitle color="gray.100">
				Our Latest Article To Help You
			</SectionSubtitle>
			<Text textAlign={"center"} maxW={"container.md"} color={"gray.100"}>
				Does any industry face a more complex audience journey and marketing sales
				process than B2B technology? Does any industry faces a more complex audience.
			</Text>

			<Box w={"full"}>
				<Grid templateColumns={"repeat(3, 1fr)"} gap={4}>
					{Array(3)
						.fill(0)
						.map((_, index) => (
							<PostCard key={index} />
						))}
				</Grid>
			</Box>
		</Box>
	);
};

export default PostSection;

const PostCard = () => {
	return (
		<GridItem
			w={"100%"}
			display={"flex"}
			flexDirection={"column"}
			rounded={"lg"}
			bg={"gray.100"}
			position={"relative"}
			role={"group"}
			overflow={"hidden"}
		>
			<Box position={"relative"}>
				<Box
					position={"absolute"}
					top={10}
					left={-1}
					bg={"#6610f2"}
					p={"2"}
					roundedRight={"md"}
					color={"gray.200"}
				>
					Photograph
				</Box>
				<Image src={"/images/blog/bg1.jpg"} alt={"post image"} roundedTop={"lg"} />
			</Box>
			{/* Post widget */}
			<PostWidget />
			{/* Post Content */}
			<Box px={"6"} pt={"2"} pb={"6"} experimental_spaceY={"5"}>
				<Heading as={"h3"} fontSize={"xl"} mt={"2"}>
					Use the Mobile App Typography
				</Heading>
				<Text>
					Strategy experience and analytical expert is combine to enable. Strate
					great experience.
				</Text>
				<Box display={"flex"} alignItems={"center"} gap={"2"}>
					<Text fontWeight={"bold"}>read more</Text>
					<Icon as={FiArrowRight} />
				</Box>
			</Box>
			<Box
				position={"absolute"}
				display={"flex"}
				gap={"4"}
				top={10}
				right={-200}
				bg={"gray.200"}
				roundedLeft={"lg"}
				shadow={"lg"}
				p={"1"}
				_groupHover={{
					right: "0",
				}}
				transition={"all .5s ease"}
			>
				<Circle bg={"blue.600"} size={"30px"} shadow={"sm"}>
					<Icon as={FaFacebook} color={"white"} />
				</Circle>
				<Circle bg={"blue.400"} size={"30px"} shadow={"sm"}>
					<Icon as={FaTwitter} color={"white"} />
				</Circle>
				<Circle bg={"whatsapp.600"} size={"30px"} shadow={"sm"}>
					<Icon as={FaWhatsapp} color={"white"} />
				</Circle>
			</Box>
		</GridItem>
	);
};

const PostWidget = () => {
	return (
		<Stack direction={"row"} gap={6} py={"2"} px={"6"} fontFamily={"Poppins"}>
			<Box display={"flex"} alignItems={"center"} gap={2} color={"gray.700"}>
				<Icon as={FiCalendar} />
				<Text fontSize={"xs"}>August 31, 2022</Text>
			</Box>
			<Box display={"flex"} alignItems={"center"} gap={2} color={"gray.700"}>
				<Icon as={FiUser} />
				<Text fontSize={"xs"}>Admin</Text>
			</Box>
			<Box display={"flex"} alignItems={"center"} gap={2} color={"gray.700"}>
				<Icon as={FiBox} />
				<Text fontSize={"xs"}> 12 Comments</Text>
			</Box>
		</Stack>
	);
};
