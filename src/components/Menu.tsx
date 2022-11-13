import { Grid, GridItem, HStack, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

const linkProps = {
  position: "relative",
  color: "gray.200",
  borderBottom: "none",
  _hover: {
    borderBottom: "none",
  },
  _before: {
    content: "''",
    position: "absolute",
    width: "100%",
    height: "1px",
    background: "currentColor",
    top: "100%",
    left: 0,
    pointerEvents: "none",
    transformOrigin: "100% 50%",
    transform: "scale3d(0, 1, 1)",
    transition: "transform 0.3s cubic-bezier(0.7, 0, 0.2, 1)",
  },
  _after: {
    content: "''",
    position: "absolute",
    top: "calc(100% + 4px)",
    width: "100%",
    height: "1px",
    background: "currentColor",
    left: 0,
    pointerEvents: "none",
    transformOrigin: "0% 50%",
    transform: "scale3d(0, 1, 1)",
    transition: "transform 0.3s cubic-bezier(0.7, 0, 0.2, 1)",
  },
  sx: {
    "&.active": {
      color: "black",
    },
    "&.active:before": {
      transformOrigin: "0% 50%",
      transform: "scale3d(1, 1, 1)",
      transitionTimingFunction: "cubic-bezier(0.4, 1, 0.8, 1)",
    },
    "&.active:after": {
      transformOrigin: "100% 50%",
      transform: "scale3d(1, 1, 1)",
      transitionTimingFunction: "cubic-bezier(0.4, 1, 0.8, 1)",
    },
    "&:hover:before": {
      transformOrigin: "100% 50%",
      transform: "scale3d(1, 1, 1)",
      transitionTimingFunction: "cubic-bezier(0.4, 1, 0.8, 1)",
    },
  },
};

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
            {/* @ts-ignore */}
            <Link
              className={router.pathname == "/" ? "active" : ""}
              {...linkProps}
            >
              about
            </Link>
          </NextLink>
          <NextLink href="/work">
            {/* @ts-ignore */}
            <Link {...linkProps}>work</Link>
          </NextLink>
          <NextLink href="/writing">
            {/* @ts-ignore */}
            <Link {...linkProps}>writing</Link>
          </NextLink>
          <NextLink href="/contact">
            {/* @ts-ignore */}
            <Link {...linkProps}>contact</Link>
          </NextLink>
        </HStack>
      </GridItem>
    </Grid>
  );
}
