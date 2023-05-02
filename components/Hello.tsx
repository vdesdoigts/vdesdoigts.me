import Image from "next/image";

export default function Hello() {
  return (
    <div className="flex max-h-[47.5rem] basis-[100vh] bg-main">
      <div className="container mx-auto flex items-end px-4 py-20">
        <div className="grid w-full grid-cols-1 gap-x-8 px-4 lg:grid-cols-3">
          <div className="col-span-1 lg:col-span-2 lg:col-start-2">
            <div>
              <div className="relative pb-11">
                <Image
                  priority
                  width="501"
                  height="95"
                  src="/assets/hello-there-stroke.svg"
                  alt="hello there"
                  className="relative z-10"
                />
                <Image
                  priority
                  width="501"
                  height="95"
                  src="/assets/hello-there.svg"
                  alt="hello there"
                  className="absolute left-[2px] top-[2px] z-0"
                />
              </div>
              <div className="max-w-[45rem] text-3xl font-light leading-normal">
                <p className="pb-8">
                  I’m Vincent, a multidisciplinary developer and creative. With
                  strong skills in development and user experience, I love
                  creating user-friendly interfaces.
                </p>
                <p>
                  I’m the co-founder of Premier Octet, an agency that develops
                  website / apps for companies like Orpi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Container maxW={{ base: "container.sm", lg: "container.xl" }} h="100%">
        <VStack pb={24} h="100%" justifyContent="space-between">
          <Box w="100%">{children}</Box>
          <Grid
            templateColumns={{
              base: "repeat(1, minmax(0, 1fr))",
              lg: "repeat(3, minmax(0, 1fr))",
            }}
            gap={8}
            w="100%"
          >
            <GridItem
              colStart={{ base: 1, lg: 2 }}
              colSpan={{ base: 1, lg: 2 }}
            >
              <Box as="section" pt={24}>
                <Heading
                  pb={6}
                  color="black"
                  fontSize="7xl"
                  textTransform="uppercase"
                >
                  Hello There
                </Heading>
                <Box maxW="720px" color="gray.900" fontSize="3xl">
                  <Box as="p" pb={4}>
                    I’m Vincent, a multidisciplinary developer and creative.
                    With strong skills in development and user experience, I
                    love creating user-friendly interfaces.
                  </Box>
                  <Box as="p">
                    I’m the co-founder of{" "}
                    <NextLink href="https://premieroctet.com" passHref>
                      <Link as="a">Premier Octet</Link>
                    </NextLink>
                    , an agency that develops website / apps for companies like
                    Orpi. */}
    </div>
  );
}
