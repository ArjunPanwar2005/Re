import { Box, Heading, SimpleGrid, Center, Button } from "@chakra-ui/react";
import type { GetServerSideProps } from "next";

import CatalogBox from "lib/components/search/CatalogBox";
import { SearchQueryAPI } from "lib/utils/constants";

interface IItems {
  title: string;
  link: string;
  displayLink: string;
  snippet: string;
  image: string;
}

interface IProps {
  querysearch: string;
  data: IItems[];
}

function Search({ querysearch, data }: IProps) {
  const returnButton = () => {
    window.location.href = "/";
  };
  return (
    <Box minHeight="80vh" gap={8} mb={8} w="full">
      <Button
        marginBottom="5"
        marginRight="5"
        position="absolute"
        right="0"
        fontSize="1.5rem"
        padding="8"
        onClick={returnButton}
      >
        Return
      </Button>
      <Heading as="h1" marginBottom="10">
        Search result for &quot;{querysearch}&quot;
      </Heading>
      <Center my="4">
        <SimpleGrid columns={[2, null, 3]} spacing="12">
          {data.map((x) => (
            <CatalogBox key={0} item={x} />
          ))}
        </SimpleGrid>
      </Center>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await fetch(SearchQueryAPI(String(ctx.query.q)));
  const {
    data: { items },
  } = await res.json();

  return {
    props: {
      querysearch: ctx.query.q,
      data: items,
    },
  };
};

export default Search;
