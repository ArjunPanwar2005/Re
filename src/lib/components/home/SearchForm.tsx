import {
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchForm() {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  const [query, setQuery] = useState("");
  const router = useRouter();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const onClick = () => {
    router.push(`/search?q=${query}`);
  };

  return (
    <Stack
      spacing="8"
      alignItems="center"
      justifyContent="center"
      direction="column"
      w="full"
    >
      <InputGroup>
        <InputLeftElement>
          <FaSearch />
        </InputLeftElement>
        <Input
          minW={isLargerThan1280 ? "800" : "0"}
          borderRadius="25"
          type="search"
          placeholder="Type what you want to learn"
          value={query}
          onChange={onChange}
        />
      </InputGroup>
      <Button onClick={onClick}>Search</Button>
    </Stack>
  );
}

export default SearchForm;
