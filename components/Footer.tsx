import { Box, Container, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      as="footer"
      // bg="#F8F6F5"
      boxShadow="inset 0 1px 0 rgb(171 182 193 / 15%)"
      py={12}
    >
      <Container maxW={{ base: "container.sm", lg: "container.xl" }}>
        <Text>© 2022 Vincent Desdoigts.</Text>
      </Container>
    </Box>
  );
}
