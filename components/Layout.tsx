import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import HeaderContainer from "./header/HeaderContainer";

interface Props {
	children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<Box>
			{/* Header Container */}
			<HeaderContainer />
			{children}
		</Box>
	);
};

export default Layout;
