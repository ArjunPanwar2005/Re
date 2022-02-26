import { Box, Stack, Text } from "@chakra-ui/react";

import SearchForm from "lib/components/home/SearchForm";

const Home = () => {
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
        <Text textAlign="center" fontWeight="bold" fontSize="28pt">
          ReSearch Engine
        </Text>
        <SearchForm />
      </Stack>
    </Box>
  );
};

export default Home;
