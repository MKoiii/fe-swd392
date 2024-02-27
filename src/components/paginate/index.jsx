import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Td, Text, Tr } from "@chakra-ui/react";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

const Paginate = ({
  isTable,
  currentPage,
  totalPages,
  onPageChange,
  colSpan,
}) => {
  const pageNumbers = [];
  const maxPageNumbers = 5; // Số lượng trang tối đa hiển thị
  const ellipsis = "...";

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = () => {
    if (totalPages <= maxPageNumbers) {
      return pageNumbers.map((page) => (
        <Button
          key={page}
          variant={currentPage === page ? "solid" : "outline"}
          colorScheme={currentPage === page ? "blue" : "gray"}
          onClick={() => onPageChange(page)}
          size="sm"
          mx={1}
        >
          {page}
        </Button>
      ));
    } else {
      const visiblePages = [];
      if (currentPage <= 3) {
        visiblePages.push(
          ...pageNumbers.slice(0, maxPageNumbers - 1),
          ellipsis,
          totalPages
        );
      } else if (currentPage >= totalPages - 2) {
        visiblePages.push(
          1,
          ellipsis,
          ...pageNumbers.slice(totalPages - maxPageNumbers + 2)
        );
      } else {
        visiblePages.push(
          1,
          ellipsis,
          ...pageNumbers.slice(currentPage - 2, currentPage + 1),
          ellipsis,
          totalPages
        );
      }

      return visiblePages.map((page, index) => (
        <React.Fragment key={index}>
          {page === ellipsis ? (
            <Text key={index} mx={1}>
              {ellipsis}
            </Text>
          ) : (
            <Button
              key={page}
              variant={currentPage === page ? "solid" : "outline"}
              colorScheme={currentPage === page ? "blue" : "gray"}
              onClick={() => onPageChange(page)}
              size="sm"
              mx={1}
            >
              {page}
            </Button>
          )}
        </React.Fragment>
      ));
    }
  };

  return (
    <>
      {isTable ? (
        <tfoot>
          <Tr>
            <Td colSpan={colSpan}>
              <Flex justify="right" mt={4} width={"100%"}>
                <Button
                  isDisabled={currentPage === 1}
                  onClick={() => onPageChange(currentPage - 1)}
                  size="sm"
                  mx={1}
                >
                  <GrFormPrevious />
                </Button>
                <Box display={"flex"} alignItems={"center"}>
                  {renderPageNumbers()}
                </Box>
                <Button
                  isDisabled={currentPage === totalPages}
                  onClick={() => onPageChange(currentPage + 1)}
                  size="sm"
                  mx={1}
                >
                  <MdNavigateNext />
                </Button>
              </Flex>
            </Td>
          </Tr>
        </tfoot>
      ) : (
        <Flex justify="right" mt={4} width={"100%"}>
          <Button
            isDisabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
            size="sm"
            mx={1}
          >
            <GrFormPrevious />
          </Button>
          <Box display={"flex"} alignItems={"center"}>
            {renderPageNumbers()}
          </Box>
          <Button
            isDisabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
            size="sm"
            mx={1}
          >
            <MdNavigateNext />
          </Button>
        </Flex>
      )}
    </>
  );
};

export default Paginate;
