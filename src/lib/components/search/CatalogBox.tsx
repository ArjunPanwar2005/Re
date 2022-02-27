import {
  Box,
  Image,
  Text,
  useMediaQuery,
  useColorMode,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

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

  return (
    <Box
      p="4"
      as="a"
      href={item.link}
      minH="10vh"
      maxW="400"
      boxShadow="2xl"
      borderRadius="15"
      borderColor={colorMode !== "light" ? "gray.600" : "gray.300"}
      borderWidth="1px"
    >
      <Box
        w="full"
        h={isLargerThan1280 ? "300" : "100"}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image src={image || "/noimage.png"} />
      </Box>
      <Text fontWeight="bold">{item.title}</Text>
      <Text>{item.snippet}</Text>
    </Box>
  );
}

export default CatalogBox;
