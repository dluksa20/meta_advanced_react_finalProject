import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      maxW="sm"
      bg="white"
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
    >
      <Image src={imageSrc} alt={title} objectFit="cover" w="100%" h="200px" />

      <VStack p={4} align="start" spacing={2}>

        <Heading as="h3" size="md">
          {title}
        </Heading>

        <Text fontSize="sm" color="gray.600">
          {description}
        </Text>

        <HStack spacing={4} align="center">
          <Text fontWeight="bold" color="teal.500">
            Learn More
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="teal" />
        </HStack>

      </VStack>
    </Box>
  );
};

export default Card;
