import AboutSection from "../components/home/AboutSection";
import FeatureSection from "../components/home/FeatureSection";
import Head from "next/head";
import Layout from "../components/Layout";
import { NextPage } from "next";
import TeamSection from "../components/home/TeamSection";
import TestimonialSection from "../components/home/TestimonialSection";
import PostSection from "../components/home/PostSection";

const Home: NextPage<{}> = () => {
	return (
		<Layout>
			<Head>
				<title>Home</title>
			</Head>
			{/* Feature Section */}
			<FeatureSection />
			{/* About Section */}
			<AboutSection />
			{/* Team Section */}
			<TeamSection />
			{/* Testimonial Section */}
			<TestimonialSection />
			{/* Post Section */}
			<PostSection />
		</Layout>
	);
};

export default Home;
