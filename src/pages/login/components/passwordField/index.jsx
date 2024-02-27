import {
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

const PasswordField = ({ props, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickReveal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <FormControl>
      <FormLabel htmlFor="password">Password</FormLabel>
      <InputGroup>
        <InputRightElement>
          <IconButton
            variant="text"
            aria-label={isOpen ? "Mask password" : "Reveal password"}
            icon={isOpen ? <HiEyeOff /> : <HiEye />}
            onClick={onClickReveal}
          />
        </InputRightElement>
        <Input
          id="password"
          name="password"
          type={isOpen ? "text" : "password"}
          autoComplete="current-password"
          required
          {...props}
          onChange={(e) => onChange(e)}
        />
      </InputGroup>
    </FormControl>
  );
};

export default PasswordField;
