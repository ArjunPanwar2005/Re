import { Box, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Callback() {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { access_token } = router.query;
  useEffect(() => {
    window.localStorage.setItem("access_token", String(access_token));
    setTimeout(() => router.push("/"), 500);
  }, [access_token, router]);
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
