import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";

const ModalApproveMerchant = ({ isOpen, setIsOpen, onFinish }) => {
  const onClose = () => {
    if (setIsOpen !== undefined) {
      setIsOpen(false);
    }
  };
  const [reason, setReason] = useState("");
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Phê duyệt đối tác</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel>Lí do</FormLabel>
              <Textarea
                placeholder="Lí do"
                onChange={(e) => setReason(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                if (onFinish !== undefined) {
                  onFinish(reason);
                }
              }}
            >
              Xác nhận
            </Button>
            <Button onClick={onClose}>Huỷ</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalApproveMerchant;
