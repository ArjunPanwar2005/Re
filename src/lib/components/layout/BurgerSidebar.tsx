import {
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Stack,
} from "@chakra-ui/react";
import { BsGoogle } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";

export default function BurgerSidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onClickGoogle = () => {
    window.location.assign(
      "https://accounts.google.com/o/oauth2/v2/auth?access_type=online&scope=email%20profile%20openid&response_type=code&client_id=299609758252-da5o272nd4l7milun83a8n2al6t29d4s.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fastonishing-eggnog-production.up.railway.app%2Fv1%2Fauthorize%2Fredirect"
    );
  };

  return (
    <>
      <IconButton
        borderRadius="0"
        variant="ghost"
        fontSize="2xl"
        aria-label="Menu"
        icon={<FiMenu />}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody my="4">
            <Stack spacing="4" direction="column">
              <Button py="12" variant="ghost" borderRadius="0" w="full">
                Bookmarks
              </Button>
              <Button
                leftIcon={<BsGoogle />}
                py="12"
                variant="ghost"
                borderRadius="0"
                w="full"
                onClick={onClickGoogle}
              >
                Connect to google
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
