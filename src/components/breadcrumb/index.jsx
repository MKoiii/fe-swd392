import { ChevronRightIcon } from "@chakra-ui/icons";
import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const BreadcrumbCustom = ({ links }) => {
  return (
    <div>
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="gray.500" />}
      >
        {links?.map((data, index) => {
          return (
            <BreadcrumbItem key={index}>
              <Link to={data?.link}>{data?.name}</Link>
            </BreadcrumbItem>
          );
        })}
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbCustom;
