import { Box, Stack, Text, useMediaQuery } from "@chakra-ui/react";

import SearchForm from "lib/components/home/SearchForm";

const Home = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
      gap={8}
      mb={8}
      w="full"
    >
      <Stack h="full" spacing="4">
        <Box>
          <Text
            textAlign="center"
            fontWeight="bold"
            fontSize={isLargerThan1280 ? "28pt" : "24pt"}
          >
            ReSearch Engine
          </Text>
          <Text textAlign="center" fontStyle="italic" fontSize="sm">
            Your all in one destination for learning
          </Text>
        </Box>

        <SearchForm />
      </Stack>
    </Box>
  );
};

export default Home;
