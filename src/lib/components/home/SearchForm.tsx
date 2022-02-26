import {
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

function SearchForm() {
  return (
    <Stack
      spacing="8"
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <InputGroup>
        <InputLeftElement>
          <FaSearch />
        </InputLeftElement>
        <Input
          borderRadius="25"
          w="40vw"
          type="search"
          placeholder="Type what you want to learn"
        />
      </InputGroup>
      <Button w="6vw" p="4">
        Search
      </Button>
    </Stack>
  );
}

export default SearchForm;
