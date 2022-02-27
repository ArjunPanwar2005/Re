import { Box, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    if (window.localStorage.getItem("access_token")) {
      window.localStorage.removeItem("access_token");
    }
    setTimeout(() => router.push("/"), 500);
  }, [router]);
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
      gap={8}
      mb={8}
      w="full"
    >
      <Heading as="h1">Success</Heading>
    </Box>
  );
}
