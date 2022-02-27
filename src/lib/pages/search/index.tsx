import { Box, Heading } from "@chakra-ui/react";
import type { GetServerSideProps } from "next";

interface IProps {
  querysearch: string;
}

function Search({ querysearch }: IProps) {
  return (
    <Box minHeight="80vh" gap={8} mb={8} w="full">
      <Heading as="h1">Search result for &quot;{querysearch}&quot;</Heading>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      querysearch: ctx.query.q,
    },
  };
};

export default Search;
