import { Box } from "@chakra-ui/react";
import React from "react";

const TestimonialShape = () => {
	return (
		<Box
			position={"absolute"}
			top={"0"}
			left={0}
			w={"full"}
			overflow={"hidden"}
			lineHeight={0}
		>
			<svg
				data-name="Layer 1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1200 120"
				preserveAspectRatio="none"
				style={{
					position: "relative",
					display: "block",
					width: "calc(100% + 1.3px)",
					height: "56px",
					transform: "rotateY(180deg)",
				}}
			>
				<path
					d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
					style={{
						fill: "#FFFFFF",
					}}
				></path>
			</svg>
		</Box>
	);
};

export default TestimonialShape;
