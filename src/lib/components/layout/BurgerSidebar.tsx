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
import { FiMenu } from "react-icons/fi";

export default function BurgerSidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
              <Button py="12" variant="ghost" borderRadius="0" w="full">
                Connect to google
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
