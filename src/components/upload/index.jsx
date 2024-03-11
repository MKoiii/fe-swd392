import React, { useState } from "react";
import { Box, Button, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { MdClose, MdCloudUpload } from "react-icons/md";

const FileUpload = ({
  isMultiple,
  onReview,
  onFilesSelect,
  disabledReview,
}) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (event) => {
    const files = event.target.files;
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    let isValid = true;
    const newSelectedFiles = [];

    for (let i = 0; i < files.length; i++) {
      if (!allowedTypes.includes(files[i].type)) {
        setErrorMessage(
          "Please select only valid image files (JPEG, PNG, GIF)."
        );
        isValid = false;
        break;
      } else {
        newSelectedFiles.push(files[i]);
      }
    }

    if (isValid) {
      if (isMultiple) {
        setSelectedFiles([...selectedFiles, ...newSelectedFiles]);
        if (onReview) {
          onReview([...selectedFiles, ...newSelectedFiles]);
        }
      } else {
        setSelectedFiles([...newSelectedFiles]);
        if (onReview) {
          onReview([...newSelectedFiles]);
        }
      }
      setErrorMessage("");
    }
  };

  const handleRemoveFile = (index) => {
    const newSelectedFiles = [...selectedFiles];
    newSelectedFiles.splice(index, 1);
    setSelectedFiles(newSelectedFiles);
  };

  const handleUpload = () => {
    onFilesSelect(selectedFiles);
    setSelectedFiles([]);
  };

  return (
    <VStack width={"100%"} spacing={4} alignItems="flex-start">
      <Flex flexDirection={"column"}>
        <Flex alignItems={"center"} gap={"16px"}>
          <input
            type="file"
            onChange={handleFileChange}
            style={{ display: "none" }}
            multiple={isMultiple}
          />
          <label>
            <Button
              as="span"
              colorScheme="blue"
              variant="outline"
              size="lg"
              leftIcon={<MdCloudUpload />}
            >
              Chọn Files
            </Button>
            <input
              type="file"
              onChange={handleFileChange}
              style={{ display: "none" }}
              multiple={isMultiple}
            />
          </label>
          <Button
            h={"48px"}
            onClick={handleUpload}
            colorScheme="green"
            disabled={selectedFiles.length === 0}
          >
            Upload file
          </Button>
        </Flex>

        {errorMessage && <Text color="red.500">{errorMessage}</Text>}
      </Flex>
      {!disabledReview && selectedFiles.length > 0 && (
        <Flex alignItems={"center"} gap={"16px"} flexWrap={"wrap"}>
          {selectedFiles.map((file, index) => (
            <Box key={index} position={"relative"}>
              <Image src={window.URL.createObjectURL(file)} boxSize="180px" />
              <Button
                colorScheme="red"
                size="sm"
                onClick={() => handleRemoveFile(index)}
                borderRadius={"50%"}
                p={"4px"}
                position={"absolute"}
                top={0}
                right={0}
              >
                <MdClose />
              </Button>
            </Box>
          ))}
        </Flex>
      )}
    </VStack>
  );
};

export default FileUpload;
