import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import React from "react";

const ChakraBox = chakra(motion.div, {
	/**
	 * Allow motion props and non-Chakra props to be forwarded.
	 */
	shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default ChakraBox;
