import { Box, Heading, Text } from "@chakra-ui/react";

interface ContentProps {
  title: string;
  description: string;
  link: string;
}
export default function PremierOctet({
  title,
  description,
  link,
}: ContentProps) {
  return (
    <>
      <Heading as="h2" pt={4} color="black" fontSize="2xl" fontWeight="400">
        {title}
      </Heading>
      <Box as="p" pt={1} color="gray.900" fontSize="lg">
        {description}
      </Box>
      <Box
        position="relative"
        display="inline-block"
        color="gray.200"
        fontSize="lg"
      >
        <Text
          position="relative"
          zIndex={2}
          display="inline-block"
          color="gray.200"
          fontSize="lg"
          transition="all 0.3s ease-in-out"
        >
          {link}
        </Text>
      </Box>
    </>
  );
}
