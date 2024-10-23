import React from "react";
import { Avatar, Heading, Link, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      
      <Avatar 
        src='https://thicc-uwu.mywaifulist.moe/waifus/makima/gXB4Q7NZritBW34bCrZY4sJOyjwYYWE8cUR6RiEw.png?class=thumbnail'
        size='2xl'/>

      <Heading 
        as='h2'
        size='md'>Hello I am Makima</Heading>
        
      <Heading 
        as='h1'>I like to code in React</Heading>

    </VStack>
  </FullScreenSection>
  
);

export default LandingSection;
