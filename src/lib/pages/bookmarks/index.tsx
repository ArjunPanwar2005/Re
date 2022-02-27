import { Box, Heading } from "@chakra-ui/react";

import Main from "lib/components/bookmarks/Main";
import { isAuth } from "lib/utils/checkLogin";

const Bookmarks = () => {
  const isAuthorize = isAuth();
  return (
    <Box display="flex" minHeight="80vh" gap={8} mb={8} w="full">
      {!isAuthorize ? <Heading>You&apos;re not authorize</Heading> : <Main />}
    </Box>
  );
};

export default Bookmarks;
