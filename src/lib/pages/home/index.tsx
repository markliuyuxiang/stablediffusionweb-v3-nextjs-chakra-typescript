import { Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import CTASection from "lib/components/samples/CTASection";
import SomeImage from "lib/components/samples/SomeImage";
import SomeText from "lib/components/samples/SomeText";

import theme from "lib/theme/index";
import Fonts from "lib/theme/globals/fonts";

import Hero from "lib/components/Hero2";
import SimpleThreeColumns from "lib/components/SimpleThreeColumns";
import Footer from "lib/components/Footer";
import Playground from "lib/components/Playground";
import Navbar from "lib/components/Navbar";
import Card from "lib/components/Card";
import HgFrame from "lib/components/HgFrame";
const Home = () => {
  return (
    <>
      <NextSeo title="Stable Diffusion Online" />

      <Fonts />
      <Navbar />
      <Hero />
      <Playground />
      {/* <HgFrame /> */}
      <Footer />
    </>
  );
};

export default Home;
