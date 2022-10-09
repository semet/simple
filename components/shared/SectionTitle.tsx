import { Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
	color?: string;
	textBackdrop?: string;
	children: ReactNode;
}

const SectionTitle: React.FC<Props> = ({
	children,
	color = "cyan.400",
	textBackdrop = "rgba(11, 188, 189, 0.3)",
}) => {
	return (
		<Heading
			as={"h4"}
			fontSize={"lg"}
			position={"relative"}
			textTransform={"uppercase"}
			color={color}
			display={"inline-block"}
			_before={{
				content: "''",
				width: "100%",
				height: "50%",
				bgColor: `${textBackdrop}`,
				position: "absolute",
				top: "3",
				left: "0",
				rounded: "sm",
			}}
		>
			{children}
		</Heading>
	);
};

export default SectionTitle;
