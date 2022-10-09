import {
	AspectRatio,
	Box,
	Button,
	chakra,
	Heading,
	IconButton,
	Image,
	shouldForwardProp,
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react";
import React from "react";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import ChakraBox from "../shared/ChakraBox";

const HeroSection = () => {
	return (
		<Box display={"flex"} position={"absolute"} top={"40%"} w={"full"} px={"16"}>
			{/* Text  */}
			<Stack
				w={{ base: "full", md: "50%" }}
				direction={"column"}
				spacing={"4"}
				align={{ base: "center", md: "flex-start" }}
				textAlign={{ base: "center", md: "left" }}
			>
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
					<Heading
						as={"h1"}
						bgGradient={"linear(to-l, #7928CA, #FF0080)"}
						bgClip={"text"}
						fontSize={{ base: "3em", sm: "4em", xl: "5em" }}
						fontWeight={"extrabold"}
						letterSpacing={"widest"}
					>
						Simple
					</Heading>
				</ChakraBox>
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
					<Heading
						as={"h3"}
						fontSize={{ base: "sm", sm: "md", md: "sm", lg: "md", xl: "lg" }}
						color={"gray.600"}
						letterSpacing={"widest"}
						textShadow={"2xl"}
						fontFamily={"heading"}
					>
						Simple Next.js template built for your pleasure
					</Heading>
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
					<Button
						leftIcon={<FiGithub />}
						colorScheme="blackAlpha"
						variant="solid"
						rounded={"3xl"}
						shadow={"lg"}
					>
						Fork
					</Button>
				</ChakraBox>
			</Stack>
			{/* Image */}
			<ChakraBox
				initial={{
					translateX: 0,
				}}
				animate={{
					translateX: [10, 20, 20, 10, 10],
				}}
				// @ts-ignore no problem in operation, although type error appears.
				transition={{
					duration: 5,
					ease: "easeInOut",
					repeat: Infinity,
					repeatType: "loop",
				}}
				w={"50%"}
				display={{ base: "none", md: "block" }}
			>
				<AspectRatio maxW="400px" ratio={5 / 4} mx={"auto"}>
					<Image src={"/images/hero/hero-imag.png"} alt={"Hero"} mt={"-28"} />
				</AspectRatio>
			</ChakraBox>
		</Box>
	);
};

export default HeroSection;
