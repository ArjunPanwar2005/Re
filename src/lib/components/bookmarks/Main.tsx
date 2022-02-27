import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import CatalogBox from "../search/CatalogBox";
import type { IBookmark } from "lib/utils/bookmarks";
import { getBookmarks } from "lib/utils/bookmarks";

function Main() {
  const [bookmarkshare, setBookmarkshere] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const { status, bookmarks } = await getBookmarks(
        String(window.localStorage.getItem("access_token"))
      );
      if (status === 200) {
        // console.log(bookmarks);
        setBookmarkshere(bookmarks);
        setLoading(false);
      }
    })();
  }, [setLoading, setBookmarkshere]);
  return (
    <Box>
      <Heading>Your bookmarks</Heading>
      <Box>
        {!isLoading ? (
          <SimpleGrid columns={[2, null, 3]} spacing="12">
            {bookmarkshare.map((x: IBookmark) => (
              <CatalogBox
                item={{
                  title: x.bookmarkname,
                  link: x.bookmarkurl,
                  displayLink: x.bookmarkurl,
                  snippet: x.bookmarkdescription,
                }}
              />
            ))}
          </SimpleGrid>
        ) : (
          <Text>Loading</Text>
        )}
      </Box>
    </Box>
  );
}

export default Main;
