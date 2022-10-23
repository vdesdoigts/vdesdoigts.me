import { Grid, GridItem, HStack, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

export default function Menu() {
  const router = useRouter();

  return (
    <Grid
      templateColumns={{
        base: "repeat(1, minmax(0, 1fr))",
        lg: "repeat(3, minmax(0, 1fr))",
      }}
      gap={8}
      pt={12}
    >
      <GridItem colStart={{ base: 1, lg: 2 }} colSpan={{ base: 1, lg: 2 }}>
        <HStack
          spacing={8}
          justifyContent="flex-start"
          fontFamily="heading"
          fontSize="2xl"
          fontWeight="normal"
          color="gray.200"
        >
          <NextLink href="/">
            <Link
              className={router.pathname == "/" ? "active" : ""}
              sx={{
                "&.active": {
                  color: "black",
                  "&:hover": {
                    textDecoration: "none",
                  },
                },
              }}
            >
              about
            </Link>
          </NextLink>
          <NextLink href="/work">
            <Link>work</Link>
          </NextLink>
          <NextLink href="/writing">
            <Link>writing</Link>
          </NextLink>
          <NextLink href="/contact">
            <Link>contact</Link>
          </NextLink>
        </HStack>
      </GridItem>
    </Grid>
  );
}
