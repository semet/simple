import { Box, calc, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import HeroSection from "../hero/HeroSection";
import AppLogo from "./AppLogo";
import DesktopMenu from "./menu/DesktopMenu";
import RightMenu from "./right/RightMenu";
import BannerShape from "../shape/BannerShape";
import { motion } from "framer-motion";

const HeaderContainer = () => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [headerBg, setHeaderBg] = useState("");
	const [shadowSize, setShadowSize] = useState("none");
	const [menuTextColor, setMenuTextColor] = useState("gray.100");
	const [headerHeight, setHeaderHeight] = useState("150px");

	useEffect(() => {
		const handleScroll = () => {
			setScrollPosition(window.scrollY);
			if (scrollPosition >= 40) {
				setHeaderBg("white");
				setMenuTextColor("gray.700");
				setShadowSize("md");
				setHeaderHeight("120px");
			} else {
				setHeaderBg("");
				setMenuTextColor("gray.100");
				setShadowSize("none");
				setHeaderHeight("150px");
			}
		};
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, [scrollPosition]);
	return (
		<Box h={{ base: "500px", md: "700px" }} position={"relative"} bgColor={"cyan.400"}>
			{/* Main Header */}
			<Box
				as={motion.div}
				transition="all 0.5s"
				display={"flex"}
				justifyContent={"space-between"}
				alignItems={{ base: "center", md: "end" }}
				px={{ base: "2", sm: "4", md: "16" }}
				py={{ base: "6" }}
				position={"fixed"}
				w={"full"}
				h={headerHeight}
				top={"0"}
				bgColor={headerBg}
				shadow={shadowSize}
				zIndex={"overlay"}
			>
				{/* ---> Logo */}
				<AppLogo />
				{/* ---> Menu */}
				<DesktopMenu textColor={menuTextColor} />
				{/* ---> Right Menu */}
				<RightMenu />
			</Box>
			{/* Hero Section */}
			<HeroSection />
			{/* Wavy Shape */}
			<BannerShape />
		</Box>
	);
};

export default HeaderContainer;
