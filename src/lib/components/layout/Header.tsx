import { Stack, Flex } from "@chakra-ui/react";

import BurgerSidebar from "./BurgerSidebar";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Stack
        spacing="8"
        alignItems="center"
        justifyContent="center"
        direction="row"
        marginLeft="auto"
      >
        <ThemeToggle />
        <BurgerSidebar />
      </Stack>
    </Flex>
  );
};

export default Header;
