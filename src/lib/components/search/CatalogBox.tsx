import {
  Box,
  Text,
  useMediaQuery,
  useColorMode,
  Image,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { createBookmark } from "lib/utils/bookmarks";
import retriveOG from "lib/utils/retriveImageOG";

interface IItems {
  title: string;
  link: string;
  displayLink: string;
  snippet: string;
}

interface IProps {
  item: IItems;
}

function CatalogBox({ item }: IProps) {
  const [image, setImage] = useState("");
  useEffect(() => {
    (async () => {
      const fetchimage = await retriveOG(item.link);
      setImage(fetchimage);
    })();
  }, [setImage, item]);

  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  const { colorMode } = useColorMode();
  const addToBookmark = async (
    bookmarkname: string,
    bookmarkdescription: string,
    bookmarkurl: string
  ) => {
    const bookmarkData = {
      bookmarkname,
      bookmarkurl,
      bookmarkdescription,
    };
    const token = window.localStorage.getItem("access_token") as string;
    createBookmark(bookmarkData, token);
  };
  return (
    <Box
      p="4"
      minH="10vh"
      maxW="400"
      boxShadow="2xl"
      borderRadius="15"
      borderColor={colorMode !== "light" ? "gray.600" : "gray.300"}
      borderWidth="1px"
      padding="5"
    >
      <Box
        w="full"
        h="250"
        display="flex"
        alignItems="center"
        justifyContent="center"
        backgroundImage={image || "/noimage.png"}
        backgroundRepeat="no-repeat"
        backgroundPosition={isLargerThan1280 ? "center" : "center center"}
        borderRadius="15"
        marginBottom="5"
        as="a"
        href={item.link}
      />
      <Text fontWeight="bold" height="4rem">
        {item.title}
      </Text>
      <Text height={120}>{item.snippet}</Text>

      <Button
        padding="5"
        onClick={() => {
          addToBookmark(item.title, item.snippet, item.link);
        }}
      >
        <Image src="/star.png" height="8" marginBottom="0" right="0" />
      </Button>
    </Box>
  );
}

export default CatalogBox;
