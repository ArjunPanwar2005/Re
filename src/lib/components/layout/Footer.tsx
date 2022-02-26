import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      as="footer"
      alignItems="center"
      justifyContent="center"
      align="center"
    >
      <Text textAlign="center">
        {new Date().getFullYear()} -{" "}
        <Link
          href="https://research.reylabs.xyz"
          isExternal
          rel="noopener noreferrer"
        >
          ReSearch Engine Team
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
